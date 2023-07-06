import classNames from 'classnames/bind'
import styles from './Feature.module.scss'

import fea1 from '../../images/fea-1.svg'
import fea2 from '../../images/fea-2.svg'


const cx = classNames.bind(styles);

function Feature() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('feature')}>
                <div className={cx('feature-item')}>
                   <img src={fea1} className={cx('img-fea')} alt='fea-img'/>
                   <div className={cx('info-fea')}>
                        <span className={cx('price')}>Low Price</span>
                        <h2 className={cx('title')}>High Coziness</h2>
                        <span className={cx('sub-title')}>UPTO 50% OFF</span>
                        <span className={cx('more')}>Explore Items</span>
                   </div>
                </div>

                <div className={cx('feature-item')}>
                   <img src={fea2} className={cx('img-fea')} alt='fea-img'/>
                   <div className={cx('info-fea')}>
                        <span className={cx('price')}>Low Price</span>
                        <h2 className={cx('title')}>High Coziness</h2>
                        <span className={cx('sub-title')}>UPTO 50% OFF</span>
                        <span className={cx('more')}>Explore Items</span>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Feature;