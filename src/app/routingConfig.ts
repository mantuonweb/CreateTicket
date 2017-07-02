import { RouterModule, Routes ,Route } from '@angular/router';
import { CreateTicket, } from './ticket/create.ticket';
const indexRoute:Route={
	path:"",
	component:CreateTicket
};
const fallbackRoute:Route={
	path: '**', 
	component:CreateTicket
}
export const routeConfig=[{
	path:"ticket",
	component:CreateTicket
},
fallbackRoute,
indexRoute
];