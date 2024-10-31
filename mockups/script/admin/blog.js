// Function to toggle sidebar 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('show');
} 

//Table data manipulation
const tableData = [
    {
        title: "Understanding Quantum Computing",
        author: "Alice Johnson",
        categories: "Technology, Science",
        tags: "Quantum, Computing, Future",
        comments: "12",
        datePublished: "2024-09-15",
        link: "https://www.google.com"
    },
    {
        title: "The Rise of AI",
        author: "Bob Smith",
        categories: "Technology, AI",
        tags: "AI, Machine Learning",
        comments: "25",
        datePublished: "2024-09-18",
        link: "https://www.youtube.com/"
    },
    {
        title: "Exploring the Universe",
        author: "Carol Davis",
        categories: "Astronomy, Science",
        tags: "Space, Exploration",
        comments: "8",
        datePublished: "2024-09-20",
        link: "https://github.com/"
    },
    {
        title: "Healthy Eating Habits",
        author: "David Wilson",
        categories: "Health, Lifestyle",
        tags: "Nutrition, Wellness",
        comments: "15",
        datePublished: "2024-09-12",
        link: "https://building-u.com/"
    },
    {
        title: "The Future of Renewable Energy",
        author: "Emma Brown",
        categories: "Environment, Energy",
        tags: "Renewable, Sustainability",
        comments: "5",
        datePublished: "2024-09-22",
        link: "https://www.instagram.com/"
    }
];

function editTable() {
    const tableBody = document.querySelector('.styled-table tbody'); 

    tableBody.innerHTML = '';
    
    tableData.forEach((item,index) =>{
        const row = document.createElement('tr'); 

        row.innerHTML= `
            <td data-label="Title">${item.title}</td>
            <td data-label="Author">${item.author}</td>
            <td data-label="Categories">${item.categories}</td>
            <td data-label="Tags">${item.tags}</td>
            <td data-label="# of Comments">${item.comments}</td>
            <td data-label="Date Published">${item.datePublished}</td>
        `

        const editCell = document.createElement('td'); 
        editCell.classList.add('icon');  
        const editButton = document.createElement('button'); 
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';  
        editCell.appendChild(editButton); 
        row.appendChild(editCell);
        
        const deleteCell = document.createElement('td'); 
        deleteCell.classList.add('icon'); 
        const deleteButton = document.createElement('button'); 
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 

        deleteButton.onclick = function(){
            openDeleteModal(index);
        };

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);  

        const viewCell = document.createElement('td'); 
        viewCell.classList.add('icon'); 
        const viewButton = document.createElement('button'); 
        viewButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>'; 

        viewButton.onclick = function() {
            openLink(index);
        }  

        viewCell.appendChild(viewButton); 
        row.appendChild(viewCell);

        tableBody.appendChild(row);
    })
} 

function openLink(index){
    const url = tableData[index].link; 
    window.open(url, "_blank");
}


// Modals 
function openDeleteModal(index){
    var blog = tableData[index]; 
    var modal = document.getElementById("deleteModal"); 
    var span = document.getElementById("closeBtn1")  
    modal.style.display = 'block'; 

    var confirmButton = document.getElementById("confirmDelete"); 
    confirmButton.onclick = function () {
        deleteBlog(index);
        closeModal();
    } 

    var cancelButton = document.getElementById("cancelDelete")
    cancelButton.onclick = function () {
        closeModal();
    } 

    span.onclick = function(){
        closeModal()
    }; 

    window.onclick = function(event){
        if(event.target == modal) {
            closeModal();
        }
    }
}

function closeModal() {
    var modal = document.getElementById("deleteModal");  
    modal.style.display="none";
} 

function deleteBlog(index) {
    tableData.splice(index,1); 
    editTable();
}

editTable();