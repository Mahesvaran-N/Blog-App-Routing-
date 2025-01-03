export default function Post(){
    return(
        <><div className='post'>
            <div className='image'>
                <img src='https://techcrunch.com/wp-content/uploads/2024/07/GettyImages-2160758782.jpg?resize=1200,749'></img>
            </div>
            <div className='texts'>
                <h2>Tesla Cybertruck fails to boost 2024 sales as annual deliveries fall for first time</h2>
                <p className='info'>
                    <a className='author'>David Pasko</a>
                    <time>2022-01-05 16:45</time>
                </p>
                <p className='summary'>Tesla delivered fewer cars last year than it did in 2023, marking its first year-to-year drop and signaling that the company is struggling to reach new buyers.</p>
            </div>

        </div><div className='post'>
                <div className='image'>
                    <img src='https://techcrunch.com/wp-content/uploads/2023/08/GettyImages-1420724439.jpg?resize=1200,800'></img>
                </div>
                <div className='texts'>
                    <h2>Apheris rethinks the AI data bottleneck in life science with federated computing</h2>
                    <p className='info'>
                        <a className='author'>David Pasko</a>
                        <time>2022-01-05 16:45</time>
                    </p>
                    <p className='summary'>AI is fundamentally dependent on data, but the vast majority of health data goes unused for understandable reasons — chiefly patient privacy, regulation and IP protection.</p>
                </div>

            </div><div className='post'>
                <div className='image'>
                    <img src='https://techcrunch.com/wp-content/uploads/2025/01/trump-tower-vegas-getty.jpg?resize=1200,857'></img>
                </div>
                <div className='texts'>
                    <h2>Cybertruck explosion outside Trump hotel in Vegas leaves 1 dead, 7 injured</h2>
                    <p className='info'>
                        <a className='author'>David Pasko</a>
                        <time>2022-01-05 16:45</time>
                    </p>
                    <p className='summary'>A Tesla Cybertruck that exploded and burst into flames Wednesday morning just outside the Trump International Hotel Las Vegas has left one person dead and several injured, according to the Las Vegas Metropolitan Police Department.</p>
                </div>

            </div></>
    );
}