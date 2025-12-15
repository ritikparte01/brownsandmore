// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Couverture vs. Compound: Choosing the Right Matrix for Your Private Label Chocolate Line",
        category: "Manufacturing",
        image: "img/productone.png",
        content: `
            <p>In the world of industrial confectionery manufacturing, the first and most critical decision you will make isn't about the packaging or the flavor—it's about the fat system. The choice between couverture chocolate and compound chocolate dictates your production costs, supply chain logistics, and the final sensory experience of your product.</p>
            
            <p>As a specialized OEM manufacturer, we help brands navigate this technical landscape every day. Here is the engineering perspective on choosing the right matrix for your product.</p>
            
            <h4>1. The Physics of Cocoa Butter: Why Couverture Demands Respect</h4>
            
            <p>Couverture is defined by its high cocoa butter content (typically min. 31%). Cocoa butter is a polymorphic fat, meaning it can crystallize in different forms. To achieve the signature glossy finish and sharp "snap" of a premium bar, couverture must undergo tempering—a precise thermal cycle that encourages the formation of stable Form V (Beta) crystals.</p>
            
            <ul>
                <li><strong>Best Application:</strong> Premium keto bars, luxury truffles, and high-end retail tablets where mouthfeel is the primary selling point.</li>
                <li><strong>The Challenge:</strong> It requires strict temperature control. If your distribution chain lacks climate control (above 30°C), couverture products risk "blooming" (developing white streaks).</li>
            </ul>
            
            <h4>2. Compound Chocolate: The Efficiency Engine</h4>
            
            <p>Compound chocolate replaces cocoa butter with vegetable fats, such as palm kernel oil or coconut oil. These are known as Cocoa Butter Substitutes (CBS) or Replacers (CBR).</p>
            
            <ul>
                <li><strong>No Tempering Required:</strong> Because these fats crystallize into a stable form naturally, compound chocolate skips the tempering stage, allowing for faster, high-volume production with lower energy costs.</li>
                <li><strong>Heat Stability:</strong> We can engineer compounds with higher melting points (up to 40°C-45°C), making them the superior choice for enrobing energy bars or wafers destined for warmer markets like the Middle East or Southeast Asia.</li>
            </ul>
            
            <h4>3. The "Super-Compound" Solution</h4>
            
            <p>With cocoa prices surging, many brands are turning to "Super-Compounds." By using high-quality cocoa powder and specialized fractionated fats, we can create a compound that mimics the melt profile of couverture at a fraction of the cost. This is ideal for cost-sensitive projects like protein bar coatings or mass-market wafers.</p>
            
            <h4>The Verdict?</h4>
            
            <p>If you are building a heritage brand, stick to couverture. If you are scaling a functional snack brand with complex distribution logistics, let us help you formulate a high-performance compound.</p>
        `
    },
    {
        id: 2,
        title: "Beyond Sugar: How We Engineer Keto, Vegan, and Functional Chocolates",
        category: "Innovation",
        image: "img/prdcttwo.png",
        content: `
            <p>The modern consumer wants more than just a treat; they want fuel. The "Better-For-You" (BFY) chocolate market is exploding, driven by Keto, Paleo, and Plant-Based diets. But removing sugar and dairy from chocolate isn't just a recipe change—it's a chemistry challenge.</p>
            
            <p>As your OEM partner, here is how we solve the three biggest R&D hurdles in functional chocolate manufacturing.</p>
            
            <h4>1. The Bulking Problem (Keto & Sugar-Free)</h4>
            
            <p>Sugar makes up roughly 50% of a chocolate bar's mass. When you remove it to create a "low net carb" product, you have to replace that bulk without spiking blood sugar.</p>
            
            <ul>
                <li><strong>Our Solution:</strong> We utilize a "stacking" strategy. We blend Erythritol (for bulk and sweetness) with Inulin (chicory root fiber) or Polydextrose. Inulin acts as a prebiotic fiber, improving gut health while providing the necessary solids to keep the bar firm. We mask the cooling effect of Erythritol with high-intensity sweeteners like Stevia (Reb M) or Monk Fruit for a natural taste profile.</li>
            </ul>
            
            <h4>2. Cracking the "Vegan Milk" Code</h4>
            
            <p>Early vegan chocolates were waxy and gritty. Today, we use advanced ball-milling technology to refine plant-based milk alternatives.</p>
            
            <ul>
                <li><strong>New Ingredients:</strong> We formulate with Hydrolyzed Oat Powder for a creamy, malty flavor, or Coconut Milk Powder for a rich, high-fat melt. By grinding these particles to less than 25 microns, we achieve a mouthfeel indistinguishable from dairy milk chocolate.</li>
            </ul>
            
            <h4>3. Functional Additives: The "Active" Confection</h4>
            
            <p>Brands are increasingly asking for chocolate infused with Nootropics (for focus) or Adaptogens (for stress).</p>
            
            <ul>
                <li><strong>Thermal Protection:</strong> Many vitamins and bio-actives are heat sensitive. We use low-temperature processing and late-stage injection systems to add ingredients like MCT Oil, Ashwagandha, or Probiotics after the critical heating phases, ensuring your label claims remain valid through the product's shelf life.</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "The Art of Panning: Manufacturing Gourmet Dragees and Freeze-Dried Treats",
        category: "Technology",
        image: "img/productone.png",
        content: `
            <p>"Panning" is one of the oldest and most artistic forms of confectionery manufacturing. It involves tumbling centers—like nuts, fruits, or caramel balls—in a rotating drum while spraying them with layers of chocolate. While the concept is simple, industrial execution requires precision engineering.</p>
            
            <h4>1. Handling the Trend: Freeze-Dried Fruits</h4>
            
            <p>The hottest trend in 2025 is coating freeze-dried fruits (strawberries, raspberries, mangoes). These centers offer an intense flavor and a unique airy crunch.</p>
            
            <ul>
                <li><strong>The Moisture Threat:</strong> Freeze-dried fruit is highly hygroscopic—it acts like a sponge for moisture. If processed in standard humidity, it becomes chewy and stale instantly. Our facility utilizes specialized climate-controlled panning rooms (humidity &lt;40%) to ensure the fruit retains its signature crispness even after being enrobed in chocolate.</li>
            </ul>
            
            <h4>2. The Engineering of Stability</h4>
            
            <p>Coating nuts like almonds or hazelnuts presents a different challenge: oil migration. Over time, the natural oil in the nut can seep into the chocolate, causing it to soften and bloom.</p>
            
            <ul>
                <li><strong>The Gumming Step:</strong> We apply a pre-coat of gum arabic or a starch solution to the raw centers. This seals the nut, creating a barrier that locks oil in and keeps the chocolate coating pristine for months.</li>
            </ul>
            
            <h4>3. Finishing Touches: Polishing and Glazing</h4>
            
            <p>A rough chocolate ball isn't appetizing. The final stage involves friction-polishing the dragees in the drum, often with a glazing agent like shellac or vegetable-based waxes. This creates a hermetic seal that protects the chocolate from oxidation and gives it a brilliant, jewel-like shine.</p>
            
            <p>From Matcha-covered Almonds to Keto-friendly Chocolate Hazelnuts, our panning lines can handle bespoke batches with customized ratios of chocolate to center.</p>
        `
    },
    {
        id: 4,
        title: "Scaling Your Snack Brand: Industrial Solutions for Energy Bars and Wafers",
        category: "Production",
        image: "img/prdcttwo.png",
        content: `
            <p>Scaling a snack brand from a kitchen recipe to mass retail requires a shift in technology. Whether you are launching a high-protein energy bar or a nostalgic wafer treat, the manufacturing process defines your texture and shelf life.</p>
            
            <h4>1. Energy Bars: Cold Slab vs. Extrusion</h4>
            
            <p>Texture is the number one complaint in the protein bar market. Traditional extrusion forces dough through a die under high pressure, which can harden the proteins over time, turning the bar into a "brick" on the shelf.</p>
            
            <ul>
                <li><strong>Our Technology:</strong> We utilize Cold Slab technology. This gentle process rolls the dough into a sheet (similar to a brownie) without high heat or pressure. This allows us to maintain a soft, chewy texture for a 12-month shelf life and lets us include large particulates—like whole nuts or chocolate chunks—that would be crushed in a standard extruder.</li>
            </ul>
            
            <h4>2. The Wafer Renaissance: Hollow & Filled</h4>
            
            <p>Wafers are back, but they are more sophisticated. We specialize in Hollow Wafer Balls—crispy spherical shells filled with soft creams (hazelnut, cocoa, or protein paste).</p>
            
            <ul>
                <li><strong>Moisture Management:</strong> The enemy of a wafer is sogginess. We use anhydrous (water-free) fillings based on specialized fats to ensure the cream stays soft while the wafer shell remains shattering-crisp. We can also apply internal barrier coatings (like cocoa butter) to the wafer wall for added protection.</li>
            </ul>
            
            <h4>3. Flexible Scalability</h4>
            
            <p>We understand the need for agility. Our facility offers tiered Minimum Order Quantities (MOQs) for private label runs, allowing you to test new concepts—like a vegan protein wafer or a keto-friendly nut bar—before committing to millions of units.</p>
            
            <p><strong>Ready to scale?</strong> Contact our team to tour our bar and wafer production lines.</p>
        `
    }
];

// Pagination variables
let currentPage = 1;
const postsPerPage = 4; // Show all 4 posts

// Function to render blog posts
function renderBlogs(page = 1) {
    const blogContainer = document.querySelector('.blog-wrap .col-lg-12 .row');
    
    if (!blogContainer) {
        console.error('Blog container not found');
        return;
    }

    // Show all posts
    const paginatedPosts = blogPosts;
    
    // Build HTML
    let blogsHTML = '';

    paginatedPosts.forEach(post => {
        // Create excerpt (first 2 paragraphs)
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = post.content;
        const paragraphs = tempDiv.querySelectorAll('p');
        let excerpt = '';
        if (paragraphs.length >= 2) {
            excerpt = paragraphs[0].outerHTML + paragraphs[1].outerHTML;
        } else if (paragraphs.length === 1) {
            excerpt = paragraphs[0].outerHTML;
        } else {
            excerpt = '<p>' + post.content.substring(0, 300) + '...</p>';
        }
        
        blogsHTML += `
            <div class="col-lg-12 padding-15">
                <div class="blog-item">
                    <div class="blog-thumb">
                        <img src="${post.image}" alt="post">
                        <span class="category"><a href="#">${post.category}</a></span>
                    </div>
                    <div class="blog-content">
                        <h3><a href='#'>${post.title}</a></h3>
                        <div class="blog-excerpt-${post.id}">
                            ${excerpt}
                        </div>
                        <div class="blog-full-${post.id}" style="display: none;">
                            ${post.content}
                        </div>
                        <a href="#" class="read-more" data-post-id="${post.id}" id="toggle-${post.id}">Read More</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    blogContainer.innerHTML = blogsHTML;

    // Add event listeners to all read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = this.getAttribute('data-post-id');
            toggleBlogContent(postId);
        });
    });

    // Hide pagination
    const paginationWrap = document.querySelector('.pagination-wrap');
    if (paginationWrap) {
        paginationWrap.style.display = 'none';
    }
}

// Function to toggle blog content
function toggleBlogContent(postId) {
    const excerpt = document.querySelector(`.blog-excerpt-${postId}`);
    const fullContent = document.querySelector(`.blog-full-${postId}`);
    const toggleBtn = document.getElementById(`toggle-${postId}`);
    
    if (fullContent && excerpt && toggleBtn) {
        if (fullContent.style.display === 'none') {
            excerpt.style.display = 'none';
            fullContent.style.display = 'block';
            toggleBtn.textContent = 'Read Less';
        } else {
            excerpt.style.display = 'block';
            fullContent.style.display = 'none';
            toggleBtn.textContent = 'Read More';
        }
    }
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
