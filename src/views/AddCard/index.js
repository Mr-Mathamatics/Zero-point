import React from 'react';
import InnerPageBanner from "../../components/InnerPageBanner";
import Addeditems from './AddedItems'
import PromoInput from './PromoSide';
import AddcardDummy from './Data';
const AddCard = () => {
    return (
        <>
            <main className="bg-gray-100">
                <InnerPageBanner title={"Add Cart"} />
                <section className='sec-padding'>
                    <div className="container container-small mx-auto px-5 ">
                        <div class="grid grid-cols-12 box_shadow">
                            <div class="col-span-8">
                                <Addeditems Data={AddcardDummy} />
                            </div>
                            <div class="col-span-4">
                                <PromoInput />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default AddCard