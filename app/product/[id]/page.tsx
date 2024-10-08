import React from 'react';

type Props = {
    className?: string;
    params: { id: string };
};

const ProductPage: React.FC<Props> = ({ params: { id }, className }) => {
    return (
        <div className={className}>
            {id}
        </div>
    );
};

// Use default export instead of named export
export default ProductPage;
