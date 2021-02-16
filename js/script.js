
/* Array with the user reviews */
const testimonials = [
    {
        name: 'Ferrah Zacharia',
        city: 'New York',
        photo:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis totam. Delectus optio animi doloremque maxime dolorum quasi facilis rem?",
    },
    {
        name: 'Lisa steward',
        city: 'Los Angeles',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor porro eligendi asperiores commodi suscipit! Aspernatur quia similique ipsum magni et, libero in ipsam, laudantium voluptas voluptatibus eveniet, non amet soluta!',
    },
    {
        name: 'Jenny Lopez',
        city: 'Sydney',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime blanditiis eum maiores quaerat voluptatibus explicabo eos laudantium distinctio laborum similique ad sit dolorem adipisci, inventore quis quam cumque amet voluptates numquam tenetur reprehenderit? Vitae aliquid, voluptatem quo sunt consectetur similique.",
    },
    {
        name: 'Rona Sims',
        city: 'Melbourne',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis totam. Delectus optio animi doloremque maxime dolorum quasi facilis rem?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime beatae suscipit ipsa consectetur consequuntur voluptatibus a reiciendis neque sit!",
    },
    {
        name: 'Jonathan Mcfield',
        city: 'Canberra',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptate, facere debitis numquam earum quia voluptatum aliquid voluptates. Aut, rerum! Esse itaque reiciendis incidunt minima?",
    },
    {
        name: 'Sasha Maria',
        city: 'Brisbane',
        photo:
            'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
        text:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nobis totam. Delectus optio animi doloremque maxime dolorum quasi facilis rem?. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime beatae suscipit ipsa consectetur consequuntur voluptatibus a reiciendis neque sit!',
    },
    {
        name: 'Aaron Smith',
        city: 'Hawaii',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate accusantium, autem quod officia minus laudantium non reprehenderit nemo repellendus.',
    },
]
 /* Eventlistener for onload  */
 window.addEventListener("DOMContentLoaded", function () {
     updateTestimonials();
}); 

let id = 0;
/* function for updating the testimonials */
function updateTestimonials() {
    let testimonialsContainer = document.querySelector('.testimonial-container');
    let htmlTestimonial = `<div class="progress-bar"></div>
            <div class="fas fa-quote-right fa-quote"></div>
            <div class="fas fa-quote-left fa-quote"></div>
            <p class="testimonial">
                ${testimonials[id].text}
            </p>
            <div class="user">
                <img src=" ${testimonials[id].photo}" alt="user-image" class="user-image">
                <div class="user-details">
                    <h4 class="username"> ${testimonials[id].name}</h4>
                    <p class="cityName"> ${testimonials[id].city}</p>
                </div>
            </div>`;

    testimonialsContainer.innerHTML = htmlTestimonial;
    id++;
     if (id > testimonials.length - 1) {
        id = 0;
    } 
}
/* Interval for updateTestimonial() function*/
setInterval(updateTestimonials, 5000);
