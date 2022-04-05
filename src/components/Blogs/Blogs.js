import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog-summary'>
                <h1>Difference Between Inline And Block Element</h1>
                <p align="justify">
                Inline elements can begin within a line of the HTML element, and it never starts a new line .it can break among the lines.on the other hand inline elements have data and other inline elements. It does not have any block elements.Inline elements accept only left and right margins and and it ignore top and bottom margins.height and width are not considerable for in line elements.

                block element:
                Blocks cannot begin within a line of the HTML element, and it always starts the new line of the HTML.And it start with a new line . Block elements contain block elements and other inline elements so that when we need we can call block elements alone.Block elements accept all the margins.for block element height and width are considerable.

                </p>
            </div>
            <div  className='blog-summary'>
                <h1>What is Symentic Tag?</h1>
                <p align="justify">a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. The pages made with semantic elements,that why its so much easier to read. header, footer, table etc are the symentic tag.</p>
            </div>
        </div>
    );
};

export default Blogs;