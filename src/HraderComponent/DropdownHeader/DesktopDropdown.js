// import React from 'react'
import "./DesktopDropdown.css"
import { useState } from 'react'


const DesktopDropdown = () => {
  const [hoverIndex, setHoverIndex] = useState(null)
  const menuItems = [
    { label: 'DOGS', options: [{ name: 'Dog Food', link: '/dog-food' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }, { name: 'Dog Toys', link: '/dog-toys' }] },
    { label: 'CATS', options: [{ name: 'Cat Food', link: '/cat-food' }, { name: 'Cat Toys', link: '/cat-toys' }] },
    { label: 'SMALL ANIMALS', options: [{ name: 'Rabbit Food', link: '/rabbit-food' }] },
    { label: 'BRAND', options: [{ name: 'Brand A', link: '/brand-a' }, { name: 'Brand B', link: '/brand-b' }] },
    { label: 'SHOP BY BREED', options: [{ name: 'Breed A', link: '/breed-a' }] },
    { label: 'BEST SELLING', options: [{ name: 'Product 1', link: '/best-product' }] },
    { label: 'NEW ARRIVALS', options: [{ name: 'New Product', link: '/new-arrival' }] },
    { label: 'BLOG', options: [{ name: 'Blog Post 1', link: '/blog-post-1' }] },
    { label: 'CONTACT US', options: [{ name: 'Contact Form', link: '/contact' }] },
    { label: 'HOME', options: [] },
    { label: 'OFFER', options: [{ name: 'Special Offer', link: '/offer' }] },
  ];
  return (
    <div className='desktopDropdown'>
        <ul>
          {
            menuItems.map((v,i)=>{
              return(
                <>
                 <li
                   onMouseEnter={()=>setHoverIndex(i)}
                   onMouseLeave={()=>setHoverIndex(null)}
                 >
                  <b>{v.label}</b>
                  {hoverIndex === i && v.options.length > 0 && (
                  <ul className="dropdownMenu"
                  onMouseEnter={()=>setHoverIndex(i)}
                  onMouseLeave={()=>setHoverIndex(null)}
                  
                  >
                   {v.options.map((option, idx) => (
                   <li key={idx} className="dropdownList">
                    <a href={option.link}>{option.name}</a>
                   </li>
                  ))}
              </ul>
            )}
                 </li>
                </>
              )
            })
          }
            
        </ul>
    </div>
  )
}

export default DesktopDropdown