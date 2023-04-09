const getStoryDate = (date) => new Date(date).getTime() / 1000;

const stories = window.Zuck(document.querySelector('#stories'), {
  backNative: true,
  skin: 'Snapgram',
  language: {
    unmute: 'Sesi açmak için dokunun',
    keyboardTip: 'Sonrakini görmek için boşluk tuşuna basın',
    visitLink: 'Bağlantıyı ziyaret edin',
    time: {
      ago: 'önce',
      hour: 'saat önce',
      hours: 'saat önce',
      minute: 'dakika önce',
      minutes: 'dakika önce',
      fromnow: 'şimdi',
      seconds: 'saniye önce',
      yesterday: 'dün',
      tomorrow: 'yarın',
      days: 'gün önce'
    }
  },
  stories: [
    {
      id: 'misali2',
      photo:
        'https://cdn.discordapp.com/icons/594868834457092135/a_9935e7f1197e640696e4c20828c4545a.gif?size=128',
      name: 'Misali2',
      time: getStoryDate('2023-03-24T21:00:00'),
      items: [
        {
          id: 'misali2-ramazan-1',
          type: 'photo',
          length: 1,
          src: 'https://misali2.com/assets/img/popup.png',
          preview: 'https://misali2.com/assets/img/popup.png',
          link: 'https://etkinlik.misali2.com',
          linkText: 'Misali2 Ramazan Etkinlik',
          time: getStoryDate('2023-03-24T21:00:00')
        },
        {
          id: 'misali2-ramazan-2',
          type: 'photo',
          length: 2,
          src: 'https://misali2.com/etkinlik_tanitim/assets/img/game/9.png',
          preview: 'https://misali2.com/etkinlik_tanitim/assets/img/game/9.png',
          link: 'https://etkinlik.misali2.com',
          linkText: 'Misali2 Ramazan Etkinlik',
          time: getStoryDate('2023-03-24T21:00:00')
        },
        {
          id: 'misali2-ramazan-3',
          type: 'photo',
          length: 3,
          src: 'https://misali2.com/etkinlik_tanitim/assets/img/game/10.png',
          preview:
            'https://misali2.com/etkinlik_tanitim/assets/img/game/10.png',
          link: 'https://etkinlik.misali2.com',
          linkText: 'Misali2 Ramazan Etkinlik',
          time: getStoryDate('2023-03-24T21:00:00')
        },
        {
          id: 'misali2-ramazan-4',
          type: 'photo',
          length: 4,
          src: 'https://misali2.com/etkinlik_tanitim/assets/img/game/11.png',
          preview:
            'https://misali2.com/etkinlik_tanitim/assets/img/game/11.png',
          link: 'https://etkinlik.misali2.com',
          linkText: 'Misali2 Ramazan Etkinlik',
          time: getStoryDate('2023-03-24T21:00:00')
        },
        {
          id: 'misali2-ramazan-5',
          type: 'photo',
          length: 5,
          src: 'https://misali2.com/etkinlik_tanitim/assets/img/game/12.png',
          preview:
            'https://misali2.com/etkinlik_tanitim/assets/img/game/12.png',
          link: 'https://etkinlik.misali2.com',
          linkText: 'Misali2 Ramazan Etkinlik',
          time: getStoryDate('2023-03-24T21:00:00')
        }
      ]
    }
  ]
});
