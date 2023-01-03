import * as Mock from 'mockjs';
import dayjs from 'dayjs';

function getLatestDates(): Date[] {
  const list:Date[] = [];
  for (let i = 0; i < 15; i++) {
    list.unshift(dayjs().subtract(i, 'day').toDate());
  }
  return list;
}

export default [{
  url: '/api/access/latest',
  data: (mock: Mock.MockjsMock) => {
    // let last = 4000;
    return mock({
      'list': getLatestDates().map(date => {
        // const up = Math.random() < 0.7;
        // const totalCount = last + Math.round(Math.random() * 4000) * (up ? 1 : -1);
        // last = totalCount;
        return {
          date: dayjs(date).format('YYYY-MM-DD'),
          totalCount: '@integer(4000, 8000)'
        };
      })
    }).list;
  }
}];
