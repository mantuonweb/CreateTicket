import { RouterModule, Routes ,Route } from '@angular/router';
import { CreateTicket, } from './ticket/create.ticket';
import { AddNewTicket } from './ticket/addnew';
import { ticketRouteConfig, } from './ticket/ticketRouteConfig';

const indexRoute:Route={
	path:"",
	component:CreateTicket
};
const fallbackRoute:Route={
	path: '**', 
	component:CreateTicket
}
export const routeConfig=[
...ticketRouteConfig,
fallbackRoute,
indexRoute
];