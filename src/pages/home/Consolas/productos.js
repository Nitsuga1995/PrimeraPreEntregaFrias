const Console = [{
    id: 1,
    nombre: 'Nintendo Switch Oled - Zelda Tear of The Kingdom',
    imageURL: 'https://gorilagames.com/img/Public/1019-producto-nintendo-switch-oled-zelda-tears-edition-1-5070.jpg',
    stock: 25,
    precio: 325000
},
{
    id: 2,
    nombre: 'Nintendo SP - Zelda Limited Edition',
    imageURL: 'https://retrogeektoys.com/wp-content/uploads/2019/10/Nintendo-Gameboy-Advance_Limited-Edition_Zelda.jpg',
    stock: 2,
    precio: 155000
}]

export const getConsole = () => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Console);
        }, 1500)
    })}