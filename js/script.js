const container = document.querySelector('.container');
const load = document.querySelector('.loading');
const title = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Facere fugit repellendus soluta nobis, dolorum officiis debitis vero.',
    'Repellat nam commodi laudantium sapiente provident? ',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    'Facere fugit repellendus soluta nobis, dolorum officiis debitis vero.',
    'Repellat nam commodi laudantium sapiente provident? ',
    'Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos.'];
const texts = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex aut numquam quaerat deserunt rerum minima dolor autem reiciendis mollitia!',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fugit repellendus soluta nobis, dolorum officiis debitis vero. Earum dignissimos maxime ipsum ratione nisi, accusamus enim!',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nam commodi laudantium sapiente provident? Non officiis temporibus quo ipsa, voluptas eveniet accusamus excepturi, enim ratione, adipisci atque dolorem iure ad.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, molestiae fugit laudantium porro dicta mollitia cum corrupti placeat dignissimos. Autem maiores consectetur reiciendis repudiandae architecto officia ut placeat sapiente. Perferendis, doloremque veniam dignissimos nemo recusandae ipsa sint magni, aliquid repudiandae libero quidem et facilis ad odit, quia eligendi error cum!'];

let count = 0;

console.log('title', title.length);

window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollHeight - window.innerHeight;
    if (document.documentElement.scrollTop >= height) {
        if (count < title.length -1) {
            count++;
        } else {
            count = 0;
        }

        try{
            loading();
            setTimeout(() => {
                addNews(count);
                return false;
            }, 2000);

        } catch (e) {
            console.log(e.message);
        }
    }
});

function addNews(num) {
    const wrap = `
        <div class="news">
            <div class="news-title">${title[num]}</div>
            <div class="news-text">${texts[num]}</div>
        </div>
    `;
    container.insertAdjacentHTML('beforeEnd', wrap);
}

addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);
addNews(count);

function loading() {
    load.classList.add('show');

    setTimeout(() => {
        load.classList.remove('show');
    }, 2000)
}
