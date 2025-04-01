import Image from 'next/image'
import Link from 'next/link'

function HeaderNavbar() {
  return (
 
   <>
  

  {/* <!-- Mobile menu button --> */}
  <div className="md:hidden block">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
        <li><Link href="/">HomePage</Link></li>
        <li>
          <details>
            <summary>Menu</summary>
            <ul class="p-2 w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
              <li><Link href="/">Main Dish</Link></li>
              <li><Link href="/">Appetizer</Link></li>
              <li><Link href="/">Dessert</Link></li>
              <li><Link href="/">Drink</Link></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>Branch</summary>
            <ul class="p-2 w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
              <li><Link href="/">Ekbatan</Link></li>
              <li><Link href="/">Chalos</Link></li>
              <li><Link href="/">Aghdasiye</Link></li>
              <li><Link href="/">Vanak</Link></li>
            </ul>
          </details>
        </li>
        <li><Link href="/representation">Representation Failure</Link></li>
        <li><Link href="/contactus">Contact Us</Link></li>
        <li><Link href="/aboutus">About Us</Link></li>
       
      </ul>
    </div>
</div>
<div>
<Image src="/images/mehmoni-mobile.png" alt="mehmoni-logo" width={60} height={30} className='  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] '/>

</div>

  {/* <!-- Desktop menu --> */}

  <div class="navbar-center hidden md:flex md:-flex-1">
    <ul class="menu menu-horizontal">
        <li><Link href="/contactus">Contact Us</Link></li>
        <li><Link href="/aboutus">About Us</Link></li>
        <li><Link href="/representation">Representation Failure</Link></li>

        <li>
            <details>
                <summary className='hover:bg-transparent focus:bg-transparent hover:border-b hover:border-[#417F56] hover:text-[#417F56] transition'>Menu</summary>
                <ul class="p-2 w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none ">
                    <li><Link href="/">Main Dish</Link></li>
                    <li><Link href="/">Appetizer</Link></li>
                    <li><Link href="/">Dessert</Link></li>
                    <li><Link href="/">Drink</Link></li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary className='hover:bg-transparent focus:bg-transparent hover:border-b hover:border-[#417F56] hover:text-[#417F56] transition'>Branch</summary>
                <ul class="p-2 w-[144px] divide-y divide-gray-300 bg-base-100 text-base-content rounded-t-none">
                    <li><Link href="/">Ekbatan</Link></li>
                    <li><Link href="/">Chalos</Link></li>
                    <li><Link href="/">Aghdasiye</Link></li>
                    <li><Link href="/">Vanak</Link></li>
                </ul>
            </details>
        </li>
        <li><Link href="/">HomePage</Link></li>
    </ul>
</div>
 
 
</>
  )
}

export default HeaderNavbar
