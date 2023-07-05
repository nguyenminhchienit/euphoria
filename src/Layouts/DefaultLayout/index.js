import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import SimpleSlider from '../../components/SimpleSlider';
import Feature from '../../components/Feature';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('slider')}>
                    <SimpleSlider></SimpleSlider>
                </div>
                <div className={cx('content')} style={{height: '2000px'}}>
                    <div className={cx('feature')}>
                        <Feature></Feature>
                    </div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
