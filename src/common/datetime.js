import moment from "moment"
import 'moment/locale/id'

export function generateWeeks() {
    const firstDay = moment().day(0)
    let weeks = []
    for (let i=0; i < 14; i++) {
        const date = moment(firstDay).add(i+1, 'd')
        weeks.push({
            name: date.format('ddd'),
            date: date.format('DD'),
            day: moment(date).isoWeekday(),
            full: date
        })
    }
    return weeks
}

export function convertDate(datetime) {
    const date = moment(datetime)
    return date.format('dddd, DD MMMM YYYY')
}
