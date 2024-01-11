const Item = () => {
    return (
        <div className='col-lg-6 col-xxl-4 mb-5'>
            <div className='card bg-light border-0 h-100'>
                <div>
                    <img src='./default-img.jpg' alt='' style={{ display: 'block', width: '100%' }} />
                </div>
                <div className='card-body text-center p-4 p-lg-5 pt-0 pt-lg-0 mt-lg-5'>
                    <h2 className='fs-4 fw-bold'>Card title</h2>
                    <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reprehenderit, eum totam rem
                        inventore quam!
                    </p>
                </div>
                <div className='card-footer pb-lg-3'>
                    <button className='btn btn-primary' style={{ margin: '0 auto', display: 'block' }}>
                        Find Out More!
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Item;
