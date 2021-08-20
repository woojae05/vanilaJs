// Login Promise
axios.post("https://api.marktube.tv/v1/me", {
    email,
    password,
}).then(res => { });

// Login Async-Await
const res = await axios.post('https://api.marktube.tv/v1/me', {
    email,
    password,
});




function bindLogoutButton() {  // 버튼에 이벤트 연결
    const btnLogout = document.querySelector('#btn-logout');
    btnLogout.addEventListener('click',logout);
}

function getToken(){ // 토큰체크
    return localStorage.getItem('token'); 
}


async function getUserByToken(token){  // 토큰으로 서버에서 나의 정보 받아오기
    try{
        const res = await axios.get('https://api.marktube.tv/v1/me',{  // axios란? 브라우저,Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 입니다.
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        return res.data;
    }catch(error){
        console.log('getUserByToken error',error);
        return null;
    }
}

async function getBooks(token){}
    try{
        const res = await axios.get('https://api.marktube.tv/v1/book',{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        return res.data;
        }catch(error){
           console.log('getBooks error',error);
           return null; 
        }

function render(books){
    const ListElement = document.querySelector('#list');
    for(let i=0;i<books.length;i++){

     const book = books[i];
     const bookElemnt = document.createElement('div');
     bookElemnt.classList.value = 'col-md-4';
    bookElemnt.innerHTML=`<div class="card mb-4 shadow-sm">
    <div class="card-body">
    <p class="card-text">${book.title==='' ? '제목없음' :book.title}</p>
    <div class="d-flex justify-content-between align-items-center">
    <div class="btn-group">
    <a href="/book?id=${book.bookId}">
    <button 
    type="button"
    class="btn btn-sm btn-outline-secondary"
    >
    view
    </button>
    </a>
    <button
    type="button"
    class="btn btn-sm btn-outline-secondary btn-delete"
    data-book-id="${book.bookId}"
    >
    Delete
    </button>
    </div>
    <small class="text-muted">${new Date(
        book.createdAt,
    ).toLocaleString()}</small>
    </div>
    </div>
    </div>
    `;
    ListElement.append(bookElemnt);
    }
}

async function main() {
    // 버튼에 이벤트 연결
    bindLogoutButton();
    // 토큰 체크
    const token = getToken();
    if(token === null) {
        location.assign('/login');  //window.location을 통해 페이지이동
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if(user === null){
        localStorage.clear();
        location.assign('/login');
        return;
    }
    //  나의 책을 서버에서 받아오기
    const books = await getBoooks(token)
    if(books===null){
        return;
    }
    // 받아온 책을 그리기
    render(books);
}

document.addEventListener("DOMContentLoaded", main);