import { Component } from '@angular/core';
import { faLayerGroup, faChartBar, faUser, faUserCircle, faShoppingCart, faFile, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frontend';


  //icons
  layersIcon= faLayerGroup;
  chartIcon= faChartBar;
  userIcon= faUser;
  cartIcon= faShoppingCart;
  fileIcon= faFile;
  homeIcon= faHome;
  userAltIcon= faUserCircle;
}
