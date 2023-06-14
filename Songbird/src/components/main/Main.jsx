import MainCSS from './mainStyle.module.css';

export default function Main() {

    return (
        <div className={MainCSS.container}>
            <div className={MainCSS.containerChild}><h2>Test 1</h2></div>
            <div className={MainCSS.containerChild}><h2>Test 2</h2></div>
            <div className={MainCSS.containerChild}><h2>Test 3</h2></div>
            <div className={MainCSS.containerChild}><h2>Test 4</h2></div>
            <div className={MainCSS.containerChild}><h2>Test 5</h2></div>
            <div className={MainCSS.containerChild}><h2>Test 6</h2></div>
        </div>
    )
}