import React from 'react'

function Bottomfeatures() {
  return (
   
     <div className="container mt-5">
  <div className="row gx-4 gy-4">
    {/* Main Banner */}
    <div className="col-lg-8">
      <div
        className="main-banner position-relative text-white d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/front-view-young-attractive-lady-colorful-shirt-blue-skirt-taking-package-smiling-white_140725-18496.jpg?t=st=1737823640~exp=1737827240~hmac=5824a12407104c9f0bd9f057058347bf938d446ae75435e28b7598b7f7833cf5&w=1060')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div className="overlay"></div>
        <div>
          <h1 className="fw-bold">We Are Zapify</h1>
          <p>Style That Speaks, Fashion That Inspires!</p>
          <button className="btn btn-outline-light mt-2">Purchase Now!</button>
        </div>
      </div>
    </div>

    {/* Categories */}
    {[
      { title: "Women", text: "Best Clothes For Women", image: "https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?t=st=1737819386~exp=1737822986~hmac=e6e28247dd51257dc9eaa94adfbf51a426bf95746a8f10bb652823c325155d89&w=1060" },
      { title: "Kids", text: "Best Clothes For Kids", image: "https://img.freepik.com/free-photo/happy-girl-looking-shopping-bags_23-2148333195.jpg?t=st=1737819992~exp=1737823592~hmac=5f487fc7ca6e6e66218e0e4b53e7df16a233cd06453197efd180a6694934f769&w=740" },
      { title: "Mens", text: "Best Clothes For Mens", image: "https://img.freepik.com/free-photo/blond-businessman-happy-expression_1194-3898.jpg?t=st=1737820342~exp=1737823942~hmac=0cca245f2cafedbb827c6aa75324c94aee5e21463a4fe2473df872f4cba82997&w=1060" },
      { title: "Accessories", text: "Best Trend Accessories", image: "https://img.freepik.com/free-vector/gentleman-realistic-accessories-decorative-icons-set_1284-12840.jpg?t=st=1737819762~exp=1737823362~hmac=ce4cbfde49c5dd785636e53c4d1da672ccd99fb7a5c2e955672d445bd98e27c0&w=740" },
    ].map((category, index) => (
      <div className="col-lg-4" key={index}>
        <div
          className="main-banner position-relative text-white d-flex align-items-center justify-content-center text-center"
          style={{
            backgroundImage: `url('${category.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
          }}
        >
          <div className="overlay"></div>
          <div>
            <h3 className="fw-bold">{category.title}</h3>
            <p>{category.text}</p>
            <button className="btn btn-outline-light mt-2">Discover Now</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Bottomfeatures
