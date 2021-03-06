import { Directive, HostListener, Input } from '@angular/core';
import { IS_ELECTRON } from '../../../app.constants';
import { AttachmentType } from '../attachment.model';
import { ElectronService } from 'ngx-electron';
import { SnackService } from '../../../core/snack/snack.service';
import { IPC_EXEC } from '../../../../ipc-events.const';


@Directive({
  selector: '[attachmentLink]'
})
export class AttachmentLinkDirective {

  @Input() type: AttachmentType;
  @Input() href: AttachmentType;

  constructor(
    private _electronService: ElectronService,
    private _snackService: SnackService,
  ) {
  }

  @HostListener('click', ['$event']) onClick(ev: Event) {
    if (ev.target) {
      const el = ev.target as HTMLElement;
      el.blur();
    }
    if (IS_ELECTRON) {
      ev.preventDefault();
      if (!this.type || this.type === 'LINK') {
        this._openExternalUrl(this.href);
      } else if (this.type === 'FILE') {
        this._electronService.shell.openItem(this.href);
      } else if (this.type === 'COMMAND') {
        this._snackService.open({
          message: `Running "${this.href}".`,
          icon: 'laptop_windows',
        });
        this._exec(this.href);
      }
    } else if (this.type === 'LINK') {
      this._openExternalUrl(this.href);
    }
  }

  private _openExternalUrl(rawUrl) {
    // try to account for jira(?) adding a second http to the url
    const url = rawUrl
      .replace('https://https://', 'https://')
      .replace('http://http://', 'http://');

    if (IS_ELECTRON) {
      this._electronService.shell.openExternal(url);
    } else {
      const win = window.open(url, '_blank');
      win.focus();
    }
  }

  private _exec(command) {
    this._electronService.ipcRenderer.send(IPC_EXEC, command);
  }
}
