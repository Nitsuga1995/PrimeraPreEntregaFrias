const Console = [{
    id: 1,
    nombre: 'Amiibo Link - The Legend of Zelda Tear of The Kingdom',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaXGp0xhvyqnDW2-radKFoxTZ8wlBTAVvWNejn4vyd0FobRczNEGx96neX2D4Zf43wFla9mNhvQW452VZEVrKMFzt1PHuQAfp4GYA7QCzw-srvOf5BnPpCMLExf6YpTuucar1aGbQ7BW_aGHsYdSrCUcuA=w500-h500-s-no?authuser=0',
    stock: 5,
    precio: 325000
},
{
    id: 2,
    nombre: 'Amiibo Zelda - The Legend of Zelda Tear of The Kingdom',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaUR9xi4lC7_H4JuZZbEOGasCvBe9jFUND7Rsj-sp_yKRGwUzyF3NOjl01Ss2VVmdtEKTyxSEFYFzKZYUKtV0NTFQK806PBbbzsYpna4KJOnIVI4JeulYJaprR_hrpR2ERDuVVYVCxyIgT8QbWDNWAlfig=w500-h500-s-no?authuser=0',
    stock: 10,
    precio: 155000
},
{
    id: 3,
    nombre: 'Amiibo Zelda - The Legend of Zelda Breath of The Wild',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaWstfoXEPXdzGE02D10Qq-HqOE1J7MIcTBGgD7-eVrszuzR5Xa1lIh7Ie8yvT0U0g-k5fMLYkfFscRuiTtokP_njMath8uKQGiFlE3jIuaUsrvKddpTRjpM52tDHc-zUJvx9uLlFsAOleP57nmNHkVf7w=w500-h500-s-no?authuser=0',
    stock: 10,
    precio: 155000
}]

export const getAmiibos = () => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Console);
        }, 1500)
    })}