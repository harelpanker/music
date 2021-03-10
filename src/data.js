import uuid from 'react-uuid';

function chillHop() {
  return [
    {
      name: 'Beaver Creek',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
      color: ['#205950', '#2ab3bf'],
      id: uuid(),
      active: true,
    },
    {
      name: 'Daylight',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9272',
      color: ['#EF8EA9', '#ab417f'],
      id: uuid(),
      active: false,
    },
    {
      name: 'Keep Going',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
      color: ['#CD607D', '#c94043'],
      id: uuid(),
      active: false,
    },
    {
      name: 'Nightfall',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg',
      artist: 'Aiguille',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9148',
      color: ['#EF8EA9', '#ab417f'],
      id: uuid(),
      active: false,
    },
    {
      name: 'Reflection',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
      artist: 'Swørn',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9228',
      color: ['#CD607D', '#c94043'],
      id: uuid(),
      active: false,
    },
    {
      name: 'Under the City Stars',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
      artist: 'Aso, Middle School, Aviino',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=10074',
      color: ['#205950', '#2ab3bf'],
      id: uuid(),
      active: false,
    },
    {
      name: 'Far From Home',
      cover:
        'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
      artist: 'Toonorth',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8127',
      color: ['#1b134e', '#9a5756'],
      id: uuid(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;