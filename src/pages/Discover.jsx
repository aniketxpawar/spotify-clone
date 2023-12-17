import { useDispatch, useSelector } from 'react-redux';
import  {Error, Loader, SongCard} from '../components';
import {genres} from '../assets/constants'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
    const dispatch = useDispatch();
    const {activeSong,isPlaying} = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery();
    // let data = {}
    // data['result'] = {}
    // data['result']['tracks'] = [
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "544842905",
    //         "title": "Пыяла",
    //         "subtitle": "АИГЕЛ",
    //         "share": {
    //             "subject": "Пыяла - АИГЕЛ",
    //             "text": "Пыяла by АИГЕЛ",
    //             "href": "https://www.shazam.com/track/544842905/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Пыяла by АИГЕЛ.",
    //             "html": "https://www.shazam.com/snippets/email-share/544842905?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/95/1a/38/951a381e-f740-b978-8858-16413b6f2b65/mzl.erbtullm.jpg/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/544842905"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/95/1a/38/951a381e-f740-b978-8858-16413b6f2b65/mzl.erbtullm.jpg/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c8/67/3e/c8673ef0-fb83-2ba3-1d5f-dd782f672f92/cover.jpg/400x400cc.jpg",
    //             "joecolor": "b:000b15p:f4ffffs:d2d5fft:c3ced0q:a7acd0"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1539712121"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/01/18/c0011847-e7d5-e44a-c9d2-ed20e4897311/mzaf_13815513855997291591.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0/1539712120?i=1539712121&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0/1539712120?i=1539712121&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "%D0%B0%D0%B8%D0%B3%D0%B5%D0%BB",
    //                 "id": "42",
    //                 "adamid": "1222911062"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/544842905/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1222911062/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1607854462",
    //             "trackhighlighturl": "https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1607854462?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "683998326",
    //         "title": "Qizil Ko'ylak (feat. Rayhon)",
    //         "subtitle": "Xamdam Sobirov",
    //         "share": {
    //             "subject": "Qizil Ko'ylak (feat. Rayhon) - Xamdam Sobirov",
    //             "text": "Qizil Ko'ylak (feat. Rayhon) by Xamdam Sobirov",
    //             "href": "https://www.shazam.com/track/683998326/qizil-koylak-feat-rayhon",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/35/a5/6635a57e-2276-d69d-627b-593ea26d7ec2/cover.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Qizil Ko'ylak (feat. Rayhon) by Xamdam Sobirov.",
    //             "html": "https://www.shazam.com/snippets/email-share/683998326?lang=en-US&country=GB",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/683998326"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/35/a5/6635a57e-2276-d69d-627b-593ea26d7ec2/cover.jpg/400x400cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/35/a5/6635a57e-2276-d69d-627b-593ea26d7ec2/cover.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/66/35/a5/6635a57e-2276-d69d-627b-593ea26d7ec2/cover.jpg/400x400cc.jpg",
    //             "joecolor": "b:010300p:f9f9f7s:eeb383t:c7c7c5q:be9068"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1717589210"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/93/d6/56/93d656fe-09e5-b802-8d6b-7a4c20f0f87a/mzaf_13424971604661116996.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/qizil-koylak-feat-rayhon/1717589209?i=1717589210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/qizil-koylak-feat-rayhon/1717589209?i=1717589210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "xamdam-sobirov",
    //                 "id": "42",
    //                 "adamid": "1474374135"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/683998326/qizil-koylak-feat-rayhon",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1474374135/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "683571702",
    //         "title": "Седая Ночь",
    //         "subtitle": "Мераб Амзоев",
    //         "share": {
    //             "subject": "Седая Ночь - Мераб Амзоев",
    //             "text": "Седая Ночь by Мераб Амзоев",
    //             "href": "https://www.shazam.com/track/683571702/-",
    //             "twitter": "I used @Shazam to discover Седая Ночь by Мераб Амзоев.",
    //             "html": "https://www.shazam.com/snippets/email-share/683571702?lang=en-US&country=GB",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/683571702"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:subscribe",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:subscribe",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "url": "https://www.shazam.com/track/683571702/-",
    //         "highlightsurls": {},
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "672533029",
    //         "title": "На грани",
    //         "subtitle": "JANAGA & Sevak",
    //         "share": {
    //             "subject": "На грани - JANAGA & Sevak",
    //             "text": "На грани by JANAGA & Sevak",
    //             "href": "https://www.shazam.com/track/672533029/%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fd/f9/3c/fdf93cf3-134a-e76d-3164-ea7072832682/0.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover На грани by JANAGA & Sevak.",
    //             "html": "https://www.shazam.com/snippets/email-share/672533029?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/41/0a/0a/410a0a0c-5581-e124-e71a-acb4f7b1656e/pr_source.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/672533029"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/41/0a/0a/410a0a0c-5581-e124-e71a-acb4f7b1656e/pr_source.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fd/f9/3c/fdf93cf3-134a-e76d-3164-ea7072832682/0.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fd/f9/3c/fdf93cf3-134a-e76d-3164-ea7072832682/0.jpg/400x400cc.jpg",
    //             "joecolor": "b:0e0403p:ebb188s:dcb586t:bf8f6dq:b3916c"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1698126310"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/07/35/06/073506e3-bf95-064b-b7f1-6f1872599c2d/mzaf_12700203053786864541.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8/1698126309?i=1698126310&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8/1698126309?i=1698126310&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "janaga",
    //                 "id": "42",
    //                 "adamid": "1481796064"
    //             },
    //             {
    //                 "alias": "sevak",
    //                 "id": "42",
    //                 "adamid": "1487593126"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/672533029/%D0%BD%D0%B0-%D0%B3%D1%80%D0%B0%D0%BD%D0%B8",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1481796064/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "679163173",
    //         "title": "Zhurek",
    //         "subtitle": "ADAM",
    //         "share": {
    //             "subject": "Zhurek - ADAM",
    //             "text": "Zhurek by ADAM",
    //             "href": "https://www.shazam.com/track/679163173/zhurek",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/73/a8/a6/73a8a69e-49a9-e938-e555-9c97252942e7/cover.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Zhurek by ADAM.",
    //             "html": "https://www.shazam.com/snippets/email-share/679163173?lang=en-US&country=GB",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/679163173"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/73/a8/a6/73a8a69e-49a9-e938-e555-9c97252942e7/cover.jpg/400x400cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/73/a8/a6/73a8a69e-49a9-e938-e555-9c97252942e7/cover.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/73/a8/a6/73a8a69e-49a9-e938-e555-9c97252942e7/cover.jpg/400x400cc.jpg",
    //             "joecolor": "b:c3c3c3p:070707s:1b1c1bt:2d2d2dq:3c3d3c"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1709419844"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f8/1a/02/f81a02c9-d036-c516-b403-a3f5fd226f39/mzaf_17928224129820626308.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/zhurek/1709419833?i=1709419844&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/zhurek/1709419833?i=1709419844&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "adam",
    //                 "id": "42",
    //                 "adamid": "1441475773"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/679163173/zhurek",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1441475773/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "20116104",
    //         "title": "Sabry 'Aalil",
    //         "subtitle": "Sherine",
    //         "share": {
    //             "subject": "Sabry 'Aalil - Sherine",
    //             "text": "Sabry 'Aalil by Sherine",
    //             "href": "https://www.shazam.com/track/20116104/sabry-aalil",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/11/72/cc/1172cc83-9b5b-27b7-af29-a57d15238633/2003_Shirene_-_Gar7_Tany.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Sabry 'Aalil by Sherine.",
    //             "html": "https://www.shazam.com/snippets/email-share/20116104?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/2c/d4/602cd43e-34e3-f0dd-cbfd-7e549102d134/pr_source.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/20116104"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/60/2c/d4/602cd43e-34e3-f0dd-cbfd-7e549102d134/pr_source.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/11/72/cc/1172cc83-9b5b-27b7-af29-a57d15238633/2003_Shirene_-_Gar7_Tany.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/11/72/cc/1172cc83-9b5b-27b7-af29-a57d15238633/2003_Shirene_-_Gar7_Tany.jpg/400x400cc.jpg",
    //             "joecolor": "b:d8d3d7p:120906s:1f2535t:393130q:444855"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "538287781"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b1/fe/0c/b1fe0c00-ca3d-2e8b-a450-735c1e49a9a3/mzaf_13879431659145136215.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/sabry-aalil/538287586?i=538287781&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/sabry-aalil/538287586?i=538287781&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "sherine",
    //                 "id": "42",
    //                 "adamid": "287410418"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/20116104/sabry-aalil",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/287410418/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "685379082",
    //         "title": "GOAT GANG",
    //         "subtitle": "BODMAS",
    //         "share": {
    //             "subject": "GOAT GANG - BODMAS",
    //             "text": "GOAT GANG by BODMAS",
    //             "href": "https://www.shazam.com/track/685379082/goat-gang",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8f/15/39/8f153954-11de-579b-61b2-e2c5b42582b2/198026736550.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover GOAT GANG by BODMAS.",
    //             "html": "https://www.shazam.com/snippets/email-share/685379082?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ac/c8/7c/acc87c75-99de-5d87-20b3-416c92e399c8/pr_source.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/685379082"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ac/c8/7c/acc87c75-99de-5d87-20b3-416c92e399c8/pr_source.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8f/15/39/8f153954-11de-579b-61b2-e2c5b42582b2/198026736550.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8f/15/39/8f153954-11de-579b-61b2-e2c5b42582b2/198026736550.jpg/400x400cc.jpg",
    //             "joecolor": "b:0b1111p:9fccc4s:e7876ct:81a6a0q:bb705a"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1719918235"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/55/5e/19/555e193b-ae35-4857-91c9-993ff3ae8f4e/mzaf_10589402869715429384.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/goat-gang/1719918234?i=1719918235&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/goat-gang/1719918234?i=1719918235&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "bodmas",
    //                 "id": "42",
    //                 "adamid": "1470064821"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/685379082/goat-gang",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1470064821/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "154799614",
    //         "title": "Ghaba",
    //         "subtitle": "Maryam Saleh & Zeid Hamdan",
    //         "share": {
    //             "subject": "Ghaba - Maryam Saleh & Zeid Hamdan",
    //             "text": "Ghaba by Maryam Saleh & Zeid Hamdan",
    //             "href": "https://www.shazam.com/track/154799614/ghaba",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/74/dd/d274dd80-f9a6-b877-0b11-6ddd85c4b804/5056321678577.png/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Ghaba by Maryam Saleh & Zeid Hamdan.",
    //             "html": "https://www.shazam.com/snippets/email-share/154799614?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/6e/8d/a4/6e8da4e9-53c3-f706-05f0-c95559e3d5f9/6775988d-e305-49cf-bbee-6c719870ab45_ami-identity-11ae8e472107b94d0b85e0f7a515de67-2023-05-18T15-40-58.156Z_cropped.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/154799614"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/6e/8d/a4/6e8da4e9-53c3-f706-05f0-c95559e3d5f9/6775988d-e305-49cf-bbee-6c719870ab45_ami-identity-11ae8e472107b94d0b85e0f7a515de67-2023-05-18T15-40-58.156Z_cropped.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/74/dd/d274dd80-f9a6-b877-0b11-6ddd85c4b804/5056321678577.png/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/d2/74/dd/d274dd80-f9a6-b877-0b11-6ddd85c4b804/5056321678577.png/400x400cc.jpg",
    //             "joecolor": "b:ffffffp:32244as:1c2e50t:5b506eq:4a5873"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1641487806"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/04/3b/66/043b66df-e2a6-f71b-d279-c7b2464d39ea/mzaf_18250699900681134314.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/ghaba/1641487800?i=1641487806&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/ghaba/1641487800?i=1641487806&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "maryam-saleh",
    //                 "id": "42",
    //                 "adamid": "496248926"
    //             },
    //             {
    //                 "alias": "zeid-hamdan",
    //                 "id": "42",
    //                 "adamid": "376321503"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/154799614/ghaba",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/496248926/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "678039577",
    //         "title": "Ateşe Düştüm",
    //         "subtitle": "Mert Demir",
    //         "share": {
    //             "subject": "Ateşe Düştüm - Mert Demir",
    //             "text": "Ateşe Düştüm by Mert Demir",
    //             "href": "https://www.shazam.com/track/678039577/ate%C5%9Fe-d%C3%BC%C5%9Ft%C3%BCm",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/39/bb/4339bbf7-d2c3-22ed-90e7-9a14416780c8/196922638558_Cover.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Ateşe Düştüm by Mert Demir.",
    //             "html": "https://www.shazam.com/snippets/email-share/678039577?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/5a/9c/53/5a9c53da-abe1-4465-bae1-1aee5d9a31ae/c8e69d90-166b-4441-aae7-97ee1e014e84_ami-identity-d499a9473107bb791d1fd07a2fc9f0f4-2023-09-22T10-15-35.380Z_cropped.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/678039577"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/5a/9c/53/5a9c53da-abe1-4465-bae1-1aee5d9a31ae/c8e69d90-166b-4441-aae7-97ee1e014e84_ami-identity-d499a9473107bb791d1fd07a2fc9f0f4-2023-09-22T10-15-35.380Z_cropped.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/39/bb/4339bbf7-d2c3-22ed-90e7-9a14416780c8/196922638558_Cover.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/39/bb/4339bbf7-d2c3-22ed-90e7-9a14416780c8/196922638558_Cover.jpg/400x400cc.jpg",
    //             "joecolor": "b:1c1c1ep:dededes:bdbec4t:b7b7b7q:9c9ea3"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1707523753"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3c/a3/d1/3ca3d19c-d799-12af-0019-fd694b91812a/mzaf_17503633284769474415.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/ate%C5%9Fe-d%C3%BC%C5%9Ft%C3%BCm/1707523750?i=1707523753&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/ate%C5%9Fe-d%C3%BC%C5%9Ft%C3%BCm/1707523750?i=1707523753&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "mert-demir",
    //                 "id": "42",
    //                 "adamid": "1289619742"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/678039577/ate%C5%9Fe-d%C3%BC%C5%9Ft%C3%BCm",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1289619742/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     },
    //     {
    //         "layout": "5",
    //         "type": "MUSIC",
    //         "key": "601926096",
    //         "title": "Моя душа",
    //         "subtitle": "Lely45",
    //         "share": {
    //             "subject": "Моя душа - Lely45",
    //             "text": "Моя душа by Lely45",
    //             "href": "https://www.shazam.com/track/601926096/%D0%BC%D0%BE%D1%8F-%D0%B4%D1%83%D1%88%D0%B0",
    //             "image": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/09/41/61/09416138-77e3-6174-17be-1f5118c3ca99/cover.jpg/400x400cc.jpg",
    //             "twitter": "I used @Shazam to discover Моя душа by Lely45.",
    //             "html": "https://www.shazam.com/snippets/email-share/601926096?lang=en-US&country=GB",
    //             "avatar": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/80/9a/4b/809a4bfc-ca9c-11bc-19f4-80d2beec3661/43c028fd-acca-4446-9671-a074fa21e4e9_file_cropped.png/800x800cc.jpg",
    //             "snapchat": "https://www.shazam.com/partner/sc/track/601926096"
    //         },
    //         "images": {
    //             "background": "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/80/9a/4b/809a4bfc-ca9c-11bc-19f4-80d2beec3661/43c028fd-acca-4446-9671-a074fa21e4e9_file_cropped.png/800x800cc.jpg",
    //             "coverart": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/09/41/61/09416138-77e3-6174-17be-1f5118c3ca99/cover.jpg/400x400cc.jpg",
    //             "coverarthq": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/09/41/61/09416138-77e3-6174-17be-1f5118c3ca99/cover.jpg/400x400cc.jpg",
    //             "joecolor": "b:00030cp:f39b70s:f19e48t:c27c5cq:c07f3c"
    //         },
    //         "hub": {
    //             "type": "APPLEMUSIC",
    //             "image": "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
    //             "actions": [
    //                 {
    //                     "name": "apple",
    //                     "type": "applemusicplay",
    //                     "id": "1642308017"
    //                 },
    //                 {
    //                     "name": "apple",
    //                     "type": "uri",
    //                     "uri": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4b/65/24/4b65241c-159b-6ce2-3425-2c120aa747bd/mzaf_13975676912121246262.plus.aac.ep.m4a"
    //                 }
    //             ],
    //             "options": [
    //                 {
    //                     "caption": "OPEN",
    //                     "actions": [
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "applemusicopen",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BC%D0%BE%D1%8F-%D0%B4%D1%83%D1%88%D0%B0/1642307527?i=1642308017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         },
    //                         {
    //                             "name": "hub:applemusic:deeplink",
    //                             "type": "uri",
    //                             "uri": "https://music.apple.com/gb/album/%D0%BC%D0%BE%D1%8F-%D0%B4%D1%83%D1%88%D0%B0/1642307527?i=1642308017&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web"
    //                         }
    //                     ],
    //                     "beacondata": {
    //                         "type": "open",
    //                         "providername": "applemusic"
    //                     },
    //                     "image": "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
    //                     "type": "open",
    //                     "listcaption": "Open in Apple Music",
    //                     "overflowimage": "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
    //                     "colouroverflowimage": false,
    //                     "providername": "applemusic"
    //                 }
    //             ],
    //             "explicit": false,
    //             "displayname": "APPLE MUSIC"
    //         },
    //         "artists": [
    //             {
    //                 "alias": "%D0%BB%D1%96%D0%BB%D1%8345",
    //                 "id": "42",
    //                 "adamid": "1552392667"
    //             }
    //         ],
    //         "url": "https://www.shazam.com/track/601926096/%D0%BC%D0%BE%D1%8F-%D0%B4%D1%83%D1%88%D0%B0",
    //         "highlightsurls": {
    //             "artisthighlightsurl": "https://cdn.shazam.com/video/v3/en-US/GB/web/1552392667/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web"
    //         },
    //         "properties": {}
    //     }
    // ]
    const genreTitle = 'Pop';
    console.log(data?.result?.tracks)

    if(isFetching) return <Loader title="Loading songs..."/>
    if(error) return <Error/>


    return ( 
    <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center
        sm:flex-col md:flex-row mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white text-left'>Discover {genreTitle}</h2>
            <select
            onChange={() => {}}
            value=""
            className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                {genres.map(genre => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.result?.tracks.map((song,index) => (
                <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data?.result?.tracks}
                i={index}
                />
            ))}
        </div>
    </div>
    )
}

export default Discover;
