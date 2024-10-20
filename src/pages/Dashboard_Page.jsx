import React from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Dashboard_Page = () => {

  return (
    <main>
      <Navbar />
      <Button type='green' text={"Add Light"}/>
      <Button type='red' text={"Remove Light"}/>
      <Button type='green' text={"Add Fan"}/>
      <Button type='red' text={"Remove Fan"}/>

      <section>
        {/* <h2>LIGHTS</h2> */}

      </section>
    </main>

  )
}

export default Dashboard_Page;
