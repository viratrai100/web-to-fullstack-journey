import { openingHours, socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';

const Contact = () => {
 	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
 
 return (
	<footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>
		
		<div>
		 <h3>Visit Our Bar</h3>
		 <p>45, MG Road, Hazratganj, Lucknow - 226001</p>
		</div>
		

		<div>
		 <h3>Contact Us</h3>
		 <p>
        <a className="hover:text-blue-600" href="tel:+917295878240">(+91) 7295878240</a>
      </p>
		 <p>
        <a className="hover:text-blue-600 hover:underline" href="mailto:viratrai255075@gmail.com">
          viratrai255075@gmail.com
        </a>
      </p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3>Socials</h3>

		 <div className="flex justify-center items-center gap-5">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="flex flex-col items-center text-center group"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-8 h-8 mb-1 transition-transform group-hover:scale-110"
          />
          <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
            {social.name}
          </span>
        </a>
      ))}
    </div>
		 

		</div>
	 </div>
	</footer>
 )
}

export default Contact