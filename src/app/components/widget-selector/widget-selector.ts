import { Component, Input } from '@angular/core'
import { UIWidget, UIInputWidget } from 'src/app/models/widgets/UIWidget'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'widget-selector',
  templateUrl: 'widget-selector.html',
  styleUrls: ['widget-selector.scss']
})
export class WidgetSelector {
  @Input()
  public widget: UIWidget

  @Input()
  public widgetForm?: FormGroup = null

  ngOnInit() {
    if (this.widget instanceof UIInputWidget) {
      this.widget.setWidgetForm(this.widgetForm.get(this.widget.id))
    }
  }
}
