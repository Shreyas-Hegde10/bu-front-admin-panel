// Function to toggle sidebar 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle('show');
} 

const tableData = [
    {
        title: "Understanding Quantum Computing",
        author: "Alice Johnson",
        categories: "Technology, Science",
        tags: "Quantum, Computing, Future",
        comments: "12",
        datePublished: "2024-09-15"
    },
    {
        title: "The Rise of AI",
        author: "Bob Smith",
        categories: "Technology, AI",
        tags: "AI, Machine Learning",
        comments: "25",
        datePublished: "2024-09-18"
    },
    {
        title: "Exploring the Universe",
        author: "Carol Davis",
        categories: "Astronomy, Science",
        tags: "Space, Exploration",
        comments: "8",
        datePublished: "2024-09-20"
    },
    {
        title: "Healthy Eating Habits",
        author: "David Wilson",
        categories: "Health, Lifestyle",
        tags: "Nutrition, Wellness",
        comments: "15",
        datePublished: "2024-09-12"
    },
    {
        title: "The Future of Renewable Energy",
        author: "Emma Brown",
        categories: "Environment, Energy",
        tags: "Renewable, Sustainability",
        comments: "5",
        datePublished: "2024-09-22"
    }
]; 

function editTable() {
    const tableBody = document.querySelector('.styled-table tbody');
    
    tableData.forEach((item) =>{
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
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);  

        const viewCell = document.createElement('td'); 
        viewCell.classList.add('icon'); 
        const viewButton = document.createElement('button'); 
        viewButton.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';  
        viewCell.appendChild(viewButton); 
        row.appendChild(viewCell);

        tableBody.appendChild(row);
    })
} 

editTable();