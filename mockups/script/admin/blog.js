// Function to toggle sidebar 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('show');
} 

// Table data manipulation
const tableData = [
    {
        title: "Understanding Quantum Computing",
        author: "Alice Johnson",
        categories: "Technology",
        tags: "Quantum, Computing, Future",
        comments: "12",
        datePublished: "2024-09-15",
        link: "https://www.google.com"
    },
    {
        title: "The Rise of AI",
        author: "Bob Smith",
        categories: "Technology",
        tags: "AI, Machine Learning",
        comments: "25",
        datePublished: "2024-09-18",
        link: "https://www.youtube.com/"
    },
    {
        title: "Exploring the Universe",
        author: "Carol Davis",
        categories: "Astronomy",
        tags: "Space, Exploration",
        comments: "8",
        datePublished: "2024-09-20",
        link: "https://github.com/"
    },
    {
        title: "Healthy Eating Habits",
        author: "David Wilson",
        categories: "Health",
        tags: "Nutrition, Wellness",
        comments: "15",
        datePublished: "2024-09-12",
        link: "https://building-u.com/"
    },
    {
        title: "The Future of Renewable Energy",
        author: "Emma Brown",
        categories: "Environment",
        tags: "Renewable, Sustainability",
        comments: "5",
        datePublished: "2024-09-22",
        link: "https://www.instagram.com/"
    }
];

function editTable() {
    const tableBody = document.querySelector('.styled-table tbody'); 

    if (!tableBody) {
        console.log("Table body not found.");  // Debugging: If the table body is missing
        return;
    }

    tableBody.innerHTML = ''; 
    
    tableData.forEach((item, index) => {
        const row = document.createElement('tr'); 

        row.innerHTML= `
            <td data-label="Title">${item.title}</td>
            <td data-label="Author">${item.author}</td>
            <td data-label="Categories">${item.categories}</td>
            <td data-label="Tags">${item.tags}</td>
            <td data-label="# of Comments">${item.comments}</td>
            <td data-label="Date Published">${item.datePublished}</td>
        `;

        const editCell = document.createElement('td'); 
        editCell.classList.add('icon');  
        const editButton = document.createElement('button'); 
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';  
        editCell.appendChild(editButton); 
        row.appendChild(editCell); 

        editButton.onclick = function() {
            openEditModal(index);
        };

        const deleteCell = document.createElement('td'); 
        deleteCell.classList.add('icon'); 
        const deleteButton = document.createElement('button'); 
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'; 

        deleteButton.onclick = function() {
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
        };  

        viewCell.appendChild(viewButton); 
        row.appendChild(viewCell);

        tableBody.appendChild(row);
    });

    console.log("Table updated. Total rows:", tableData.length);  // Debugging: Log table update
} 

function openLink(index) {
    const url = tableData[index].link; 
    window.open(url, "_blank");
}

// Modals 
function openDeleteModal(index) {
    var modal = document.getElementById("deleteModal"); 
    var span = document.getElementById("closeBtn1");
    modal.style.display = 'block';  
    modal.style.animation = "slide-in 500ms ease-out forwards";

    var confirmButton = document.getElementById("confirmDelete"); 
    confirmButton.onclick = function () {
        deleteBlog(index);
        closeModal(modal);
    };

    var cancelButton = document.getElementById("cancelDelete");
    cancelButton.onclick = function () {
        closeModal(modal);
    };

    span.onclick = function() {
        closeModal(modal);
    }; 

    window.onclick = function(event) {
        if(event.target == modal) {
            closeModal(modal);
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modal);
        }
    });
} 

function openAddModal() {
    var modal = document.getElementById("addModal");
    var span = document.getElementById("closeBtn2");
    modal.style.display = 'block'; 
    modal.style.animation = "slide-in 500ms ease-out forwards";

    var form = document.getElementById("addBlogForm");

    form.onsubmit = function(event) {
        event.preventDefault();

        var title = document.getElementById("title").value;
        var author = document.getElementById("author").value;
        var category = document.getElementById("category").value;
        var tags = document.getElementById("tags").value;
        var comments = document.getElementById("comments").value;
        var date = document.getElementById("date").value; 
        var link = document.getElementById("link").value;

        addBlog(title, author, category, tags, comments, date,link);
        closeModal(modal);
    };

    span.onclick = function() {
        closeModal(modal);
    };

    window.onclick = function(event) {
        if(event.target == modal) {
            closeModal(modal);
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modal);
        }
    });
}

function openEditModal(index) {
    var modal = document.getElementById("editModal"); 
    var span = document.getElementById("closeBtn3"); 
    modal.style.display = 'block'; 
    modal.style.animation = "slide-in 500ms ease-out forwards"; 

    span.onclick = function() {
        closeModal(modal);
    };

    window.onclick = function(event) {
        if(event.target == modal) {
            closeModal(modal);
        }
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.style.display = "none";
}

function deleteBlog(index) {
    tableData.splice(index, 1);
    editTable();
}

function addBlog(title, author, categories, tags, comments, datePublished,link) {
    

    if (title && author && categories && tags && comments && datePublished) {
        tableData.push({
            title: title,
            author: author,
            categories: categories,
            tags: tags,
            comments: comments,
            datePublished: datePublished,
            link: link
        });

        console.log("New blog added:", title);  
    } else {
        console.log("Missing fields, blog entry not added");  
    }

    editTable();
}

editTable();
