export default function MasonryGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {/* Each div now directly contains an image without maxHeight restriction */}
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" src="https://res.cloudinary.com/djui88jlr/image/upload/v1708634196/IMG_1766_qkggd5.jpg" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" style={{ maxHeight: '680px' }}  
                src="https://res.cloudinary.com/djui88jlr/image/upload/v1708727195/Anthem_Prin23_CB_za549x.jpg" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" src="https://res.cloudinary.com/djui88jlr/image/upload/v1708727193/IMG_7419_dvixep.jpg" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" src="https://res.cloudinary.com/djui88jlr/image/upload/v1708634187/IMG_0240_dmayda.jpg" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" src="https://res.cloudinary.com/djui88jlr/image/upload/v1708634182/IMG_1069_m8fqek.jpg" alt="" />
            </div>
            <div className="overflow-hidden">
                <img className="w-full object-cover rounded-lg" src="https://res.cloudinary.com/djui88jlr/image/upload/v1708727186/2B5EBE61-064F-43AB-91E9-C021DBFEFC05_vd1ktb.jpg" alt="" />
            </div>
        </div>
    );
}
