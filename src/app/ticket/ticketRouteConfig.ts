import { RouterModule, Routes ,Route } from '@angular/router';
import { AddNewTicket, } from './addnew';
import { CreateTicket, } from './create.ticket';
export const ticketRouteConfig=[{
	path:"ticket",
	children:[{
		    path:"",
			component:CreateTicket
		},
		{
			path:"new",
			component:AddNewTicket
		}
	]
}];