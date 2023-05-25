import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form >
                <div>
                    <label >Name</label>
                    <input type="text" required placeholder='name liko'/>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" required placeholder='mail likho'/>
                </div>
                <div>
                    <label >Message</label>
                    <input type="text" required placeholder='query likhdo'/>
                </div>
            <button type="submit">Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact