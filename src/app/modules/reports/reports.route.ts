import { Route } from '@angular/router';
import { DocumentAccuracyComponent } from './document-accuracy/document-accuracy.component';
import { ElementAccuracyComponent } from './element-accuracy/element-accuracy.component';

export default [
  {
    path: 'element/:element',
    component: ElementAccuracyComponent,
  },
  {
    path: 'document/:id',
    component: DocumentAccuracyComponent,
  },
] as Route[];
