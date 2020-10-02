import moment from "moment";
import "moment/locale/vi";

export function momentCalendar(dateTime) {
   return moment(dateTime).locale("vi").calendar();
}

export function momentFromNow(dateTime) {
   return moment(dateTime).locale("vi").fromNow();
}