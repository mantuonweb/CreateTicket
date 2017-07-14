import { Component } from '@angular/core';

@Component({
  selector: 'ticket',
  templateUrl: './create.ticket.html'
})
export class CreateTicket {
  title = 'app';

  public tickets:any[]=[
  {
    "ticketNo": "INCXXXXXX0",
    "account": 24376040,
    "serviceItem": "$1,084.90",
    "Created": "2017-03-25",
    "lastUpdated": "2017-05-24",
    "status": "Waiting",
    "category": "Latency"
  },
  {
    "ticketNo": "INCXXXXXX1",
    "account": 24376041,
    "serviceItem": "$1,286.70",
    "Created": "2015-09-17",
    "lastUpdated": "2015-06-29",
    "status": "Closed",
    "category": "Data/Circuit"
  },
  {
    "ticketNo": "INCXXXXXX2",
    "account": 24376042,
    "serviceItem": "$1,247.15",
    "Created": "2014-10-28",
    "lastUpdated": "2015-02-13",
    "status": "Resolved",
    "category": "Latency"
  },
  {
    "ticketNo": "INCXXXXXX3",
    "account": 24376043,
    "serviceItem": "$2,160.60",
    "Created": "2015-08-18",
    "lastUpdated": "2015-01-03",
    "status": "Open",
    "category": "Data/Circuit"
   }//,
  // {
  //   "ticketNo": "INCXXXXXX4",
  //   "account": 24376044,
  //   "serviceItem": "$3,718.09",
  //   "Created": "2016-10-11",
  //   "lastUpdated": "2016-03-16",
  //   "status": "Waiting",
  //   "category": "Latency"
  // },
  // {
  //   "ticketNo": "INCXXXXXX5",
  //   "account": 24376045,
  //   "serviceItem": "$1,938.86",
  //   "Created": "2015-09-04",
  //   "lastUpdated": "2016-09-12",
  //   "status": "Open",
  //   "category": "Data/Circuit/Latency"
  // },
  // {
  //   "ticketNo": "INCXXXXXX6",
  //   "account": 24376046,
  //   "serviceItem": "$3,107.96",
  //   "Created": "2016-07-25",
  //   "lastUpdated": "2014-09-12",
  //   "status": "Waiting",
  //   "category": "Latency"
  // }
];
}
