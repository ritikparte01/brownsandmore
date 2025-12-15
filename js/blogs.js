// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Couverture vs. Compound: Choosing the Right Matrix for Your Private Label Chocolate Line",
        category: "Manufacturing",
        image: "img/productone.png",
        excerpt1: "In the world of industrial confectionery manufacturing, the first and most critical decision you will make isn't about the packaging or the flavor—it's about the fat system. The choice between couverture chocolate and compound chocolate dictates your production costs, supply chain logistics, and the final sensory experience of your product.",
        excerpt2: "As a specialized OEM manufacturer, we help brands navigate this technical landscape every day. Couverture is defined by its high cocoa butter content (typically min. 31%), requiring precise tempering to achieve that signature glossy finish. Compound chocolate, on the other hand, replaces cocoa butter with vegetable fats, eliminating the need for tempering and allowing for faster, high-volume production."
    },
    {
        id: 2,
        title: "Beyond Sugar: How We Engineer Keto, Vegan, and Functional Chocolates",
        category: "Innovation",
        image: "img/prdcttwo.png",
        excerpt1: "The modern consumer wants more than just a treat; they want fuel. The \"Better-For-You\" (BFY) chocolate market is exploding, driven by Keto, Paleo, and Plant-Based diets. But removing sugar and dairy from chocolate isn't just a recipe change—it's a chemistry challenge.",
        excerpt2: "As your OEM partner, we solve the three biggest R&D hurdles in functional chocolate manufacturing: the bulking problem in sugar-free products, cracking the vegan milk code using advanced ball-milling technology with hydrolyzed oat powder and coconut milk powder, and protecting heat-sensitive functional additives like MCT Oil, Ashwagandha, or Probiotics through specialized processing."
    },
    {
        id: 3,
        title: "The Art of Panning: Manufacturing Gourmet Dragees and Freeze-Dried Treats",
        category: "Technology",
        image: "img/productone.png",
        excerpt1: "\"Panning\" is one of the oldest and most artistic forms of confectionery manufacturing. It involves tumbling centers—like nuts, fruits, or caramel balls—in a rotating drum while spraying them with layers of chocolate. While the concept is simple, industrial execution requires precision engineering.",
        excerpt2: "The hottest trend in 2025 is coating freeze-dried fruits (strawberries, raspberries, mangoes). Our facility utilizes specialized climate-controlled panning rooms (humidity <40%) to ensure freeze-dried fruit retains its signature crispness. We apply pre-coats of gum arabic to seal nuts and prevent oil migration, then finish with friction-polishing and glazing for that brilliant, jewel-like shine."
    },
    {
        id: 4,
        title: "Scaling Your Snack Brand: Industrial Solutions for Energy Bars and Wafers",
        category: "Production",
        image: "img/prdcttwo.png",
        excerpt1: "Scaling a snack brand from a kitchen recipe to mass retail requires a shift in technology. Whether you are launching a high-protein energy bar or a nostalgic wafer treat, the manufacturing process defines your texture and shelf life.",
        excerpt2: "We utilize Cold Slab technology for energy bars—a gentle process that rolls dough without high heat or pressure, maintaining soft, chewy texture for 12 months. For wafers, we specialize in Hollow Wafer Balls with anhydrous fillings to keep shells crispy while creams stay soft. Our tiered MOQs allow you to test new concepts before committing to millions of units."
    }
];

// Pagination variables
let currentPage = 1;
const postsPerPage = 2;

// Function to render blog posts
function renderBlogs(page = 1) {
    const blogContainer = document.querySelector('.blog-wrap .col-lg-8 .row');
    
    if (!blogContainer) {
        console.error('Blog container not found');
        return;
    }

    // Calculate pagination
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = blogPosts.slice(startIndex, endIndex);
    
    // Build HTML
    let blogsHTML = '';

    paginatedPosts.forEach(post => {
        blogsHTML += `
            <div class="col-lg-12 padding-15">
                <div class="blog-item">
                    <div class="blog-thumb">
                        <img src="${post.image}" alt="post">
                        <span class="category"><a href="#">${post.category}</a></span>
                    </div>
                    <div class="blog-content">
                        <h3><a href='blog-single.html'>${post.title}</a></h3>
                        <p>${post.excerpt1}</p>
                        <p>${post.excerpt2}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    blogContainer.innerHTML = blogsHTML;

    // Update pagination
    currentPage = page;
    renderPagination();
}

// Function to render pagination
function renderPagination() {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    const paginationWrap = document.querySelector('.pagination-wrap');
    
    if (!paginationWrap || totalPages <= 1) {
        if (paginationWrap) paginationWrap.style.display = 'none';
        return;
    }
    
    paginationWrap.style.display = 'flex';
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<li><a href="#" onclick="changeBlogPage(${currentPage - 1}); return false;" ${currentPage === 1 ? 'style="pointer-events: none; opacity: 0.5;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none" style="transform: rotate(180deg);"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.71097L1.71097 0L9.04371 7.33274L1.71097 14.6655L0 12.9545L5.62177 7.33274L0 1.71097Z" fill="currentColor"/></svg></a></li>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<li><a href="#" onclick="changeBlogPage(${i}); return false;" class="${i === currentPage ? 'active' : ''}">${i}</a></li>`;
    }
    
    // Next button
    paginationHTML += `<li><a href="#" onclick="changeBlogPage(${currentPage + 1}); return false;" ${currentPage === totalPages ? 'style="pointer-events: none; opacity: 0.5;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.71097L1.71097 0L9.04371 7.33274L1.71097 14.6655L0 12.9545L5.62177 7.33274L0 1.71097Z" fill="currentColor"/></svg></a></li>`;
    
    paginationWrap.innerHTML = paginationHTML;
}

// Function to change page
function changeBlogPage(page) {
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    if (page < 1 || page > totalPages) return;
    
    renderBlogs(page);
    
    // Scroll to top of blog section
    const blogSection = document.querySelector('.blog-section');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderBlogs();
});
