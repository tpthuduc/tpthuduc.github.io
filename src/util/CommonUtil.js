import moment from "moment";
import "moment/locale/vi";

export function momentCalendar(dateTime) {
   return moment(dateTime).locale("vi").calendar();
}

export function momentFromNow(dateTime) {
   return moment(dateTime).locale("vi").fromNow();
}

export function prettyDateTime(dateTime) {
   var local = moment(dateTime);
   var days = moment().diff(local, 'days');
   if (days > 2) {
      return local.locale('vi').format('DD/MM/YYYY HH:mm');
   }
   else {
      return local.locale('vi').fromNow();
   }
}