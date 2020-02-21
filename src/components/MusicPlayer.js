import React from 'react'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const audioList1 = [
  {
    name: 'Sao Không Nói ( Của Ngạn )',
    singer: 'S.V',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: 'https://dl.freemp3downloads.online/file/youtubebH2py-szYrE320.mp3?fn=Sao%20Kh%C3%B4ng%20N%C3%B3i%20(%20C%E1%BB%A7a%20Ng%E1%BA%A1n%20)%20-%20S.V%E3%80%8CLyrics%20Video%E3%80%8DMeens.mp3'
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
      )
    }
  },
  {
    name: 'Mãi Chẳng Thuộc Về Nhau',
    singer: 'Bozitt',
    musicSrc: () => {
      return Promise.resolve(
        'http://dl21.freemp3downloads.online/file/youtubepse2JFM0rno320.mp3?fn=M%C3%A3i%20Ch%E1%BA%B3ng%20Thu%E1%BB%99c%20V%E1%BB%81%20Nhau%20-%20Bozitt%20_%20MV%20Lyrics%20HD.mp3'
      )
    }
  },
  {
    name: 'Độc Thân Không Phải Là Ế',
    singer: 'Nguyễn Trung Đức',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'https://dl.freemp3downloads.online/file/youtubeJbu7B-R4ooY320.mp3?fn=%C4%90%E1%BB%99c%20Th%C3%A2n%20Kh%C3%B4ng%20Ph%E1%BA%A3i%20L%C3%A0%20%E1%BA%BE%20-%20Nguy%E1%BB%85n%20Trung%20%C4%90%E1%BB%A9c%20_%20MV%20Lyrics%20Official.mp3'
  },
  {
    name: 'Đường Tôi Chở Em Về',
    singer: 'buitruonglinh',
    cover:
      'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
    musicSrc: () => {
      return Promise.resolve(
        'http://dl20.freemp3downloads.online/file/youtubeZa4maU2tvsg128.mp3?fn=%C4%90%C6%B0%E1%BB%9Dng%20T%C3%B4i%20Ch%E1%BB%9F%20Em%20V%E1%BB%81%20-%20buitruonglinh%20_%20MV%20Lyrics%20HD.mp3'
      )
    }
  },
  {
    name: 'Nắng Theo Em',
    singer: 'YANG',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc: 'http://dl20.freemp3downloads.online/file/youtubelpkaUmeIxDo320.mp3?fn=N%E1%BA%AFng%20Theo%20Em%20-%20YANG%E3%80%8CLyrics%20Video%E3%80%8DMeens.mp3'
  },
  {
    name: 'Về Với Anh Nha',
    singer: 'LilGee Phạm x Nguyễn Quang Quý, Đinh Vũ Duy',
    musicSrc: 'http://dl16.freemp3downloads.online/file/youtubevU4V_C8dYlc320.mp3?fn=V%E1%BB%81%20V%E1%BB%9Bi%20Anh%20Nha%20-%20LilGee%20Ph%E1%BA%A1m%20x%20Nguy%E1%BB%85n%20Quang%20Qu%C3%BD%2C%20%C4%90inh%20V%C5%A9%20Duy%20_%20MV%20Lyrics%20HD.mp3'
  },
  {
    name: 'Ăn Gì Anh Mời',
    singer: 'LeeAndy',
    musicSrc: 'https://dl.freemp3downloads.online/file/youtubeNunsCUt6f4A320.mp3?fn=%C4%82n%20G%C3%AC%20Anh%20M%E1%BB%9Di%20-%20LeeAndy%20(%20N%E1%BA%A5m%20-%20MISTHY%20)%20Video%20Lyric.mp3'
  },
  {
    name: 'Hơn Cả Yêu',
    singer: 'Đức Phúc',
    musicSrc: 'https://dl.freemp3downloads.online/file/youtubezJZKCSho1S4320.mp3?fn=H%C6%A1n%20C%E1%BA%A3%20Y%C3%AAu%20_%20%C4%90%E1%BB%A9c%20Ph%C3%BAc%20_%20Bun%20%26%20Orin%20Cover.mp3'
  },
  {
    name: 'Lấy Chồng Sớm Làm Gì',
    singer: 'HuyR ft. Tuấn Cry',
    musicSrc: 'https://dl.freemp3downloads.online/file/youtubepSFXJ7teisw320.mp3?fn=HuyR%20ft.%20Tu%E1%BA%A5n%20Cry%20-%20L%E1%BA%A5y%20Ch%E1%BB%93ng%20S%E1%BB%9Bm%20L%C3%A0m%20G%C3%AC%20(Ballad%20Version).mp3'
  }
]

const MusicPlayer = (props) => {
  const options = {
    // audio lists model
    audioLists: audioList1,
    theme: props.theme,
    defaultPosition: {
      top: props.top,
      left: props.left
    },
    autoPlay: props.auto
  }

  return (
    <>
      <ReactJkMusicPlayer {...options} />
    </>
  )
}

export default MusicPlayer
