import FAQList from '../components/utils/FAQList'

const FAQPage = () => {
    return (
        <div className="md:w-3/5 m-auto px-4 pt-8 text-2xl font-medium text-center">
            <h1>FAQs</h1>
            <p className='text-sm tracking-wider py-2'>Find answers to our most frequently asked questions below. If you can't find what you're looking for please contact us and we'll get in touch with 24 hours.</p>
            <FAQList />
        </div>
    )
}

export default FAQPage