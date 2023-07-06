const Games = [{
    id: 1,
    nombre: 'The Legend Of Zelda Tear Of The Kingdom',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaW7oSW4OI73kGA863yyv0iDJkCMTfLPs57BVRcuYbrMIswsKqRECV5zQU5qs_e4YPkjZoBX3RP8115wJv_KefxPsxW7ojw_kxn9lhCZ5LxxbY7uOstKgHS45zj8rxmRPV_3Y0y0ZqEZIdaj-PstuUu5cA=w500-h500-s-no?authuser=0',
    stock: 25,
    precio: 40000
},
{
    id: 2,
    nombre: 'The Legend Of Zelda Breath Of The Wild',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaUm2_T1EwQNxde0RvW85UEQDDnWTK9BjWyRqHpRyk0Rz-jlifSgB0eHu_hbvqWbGvYgLvIVAaX1xhVlU1c4I7la6XGoD5iqDK6QuG6GyzuE4p7RUZ3arwfk00svU7Xf_u9WVhjSk9YtoxiAvwFyLWRUMA=w500-h500-s-no?authuser=0',
    stock: 40,
    precio: 35000
},
{
    id: 3,
    nombre: 'The Legend Of Zelda Links Awakening',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaVbl_oo3iyexGGvrZc58HQkXE0MSGsajx1ZjWhW55FhbcI8vumsXzqphwmIlFhP9QAESwVO3uBnnNDyBKB6KQzoDyL61fLz8Wbyk1jiJaDuznFS7lQeh-3mNdEH5CaWbJnC3YMO2bu5QLQujB_m8zTxEA=w500-h500-s-no?authuser=0',
    stock: 5,
    precio: 35000
},
{
    id: 4,
    nombre: 'The Legend Of Zelda Skyward Sword',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaVuJnCYhShDd7ilUI2sF4nn_2hpffTRIBZ2mbyzf1A9WPDEtuJa1GtirSUnQes1W53g_q00agAepfIh0VpQMoS24f4oi3_e0VLQTwnMPHiDE79mtpxULp2ZQSQjXYv4UkfMfnnb6zjKe2TzFT1DiwTM0A=w500-h500-s-no?authuser=0',
    stock: 2,
    precio: 25000
},
{
    id: 5,
    nombre: 'The Legend Of Zelda Ocarina Of Time',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaXN0t334CkZUFxv3Vc_aGBXJXvR86hpq50VF2vP3N_XjMhdeKN9GDRT2pCILlODoj-wG_LVVfgFUGqP5RRCUjcOZyaoYe7jW5IHwtsNgAvnRlBUck6wMG2ikylJKiequo9B2ANf1XLhscIRS7EJx8io6w=w500-h500-s-no?authuser=0',
    stock: 6,
    precio: 95000
},
{
    id: 6,
    nombre: 'The Legend Of Zelda Majoras Mask',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaVVTUPtTnDQfqxoFW59sXJLETF_FSFKYfNNJMpakorFXzB-jY6xQhNt2Wj4EyAuWeVoB4cLnm8GzW1ImDniz00U-YRf2RwtAZuzM3kzLzdirldO67ExRZC5Gy1RD3BvZrpjU-0LWFlNgeI2yyh0rsvDYA=w500-h500-s-no?authuser=0',
    stock: 3,
    precio: 90000
},
{
    id: 7,
    nombre: 'The Legend Of Zelda The Minish Cap',
    imageURL: 'https://lh3.googleusercontent.com/pw/AJFCJaUvoJd7kf7WDxyMwy_nN54sN5aJW3n7Yac6atYVHUqMelaDCcqMLWOpXnlWrm35nyr3FpVEljqHJVKdHqKk4o8TbkylNqMGd94YjIvKKD2pdSIitkH7tRC375aBvNfTY-1glNqt018hKkuHwHac3pip7Q=w500-h500-s-no?authuser=0',
    stock: 1,
    precio: 70000
}]

export const getGames = () => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Games);
        }, 1500)
    })}

