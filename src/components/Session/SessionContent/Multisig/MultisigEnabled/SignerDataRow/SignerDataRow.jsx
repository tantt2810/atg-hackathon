import React from 'react';
import PropTypes from 'prop-types';
import CopyButton from './../../../../../Common/CopyButton/CopyButton';
import Driver from '../../../../../../lib/Driver';

const images = require('../../../../../../images');


export default function SignerDataRow(props) {
    const { signer } = props;

    return (
        <div className="SignerDataRow">
            <div className="SignerDataRow_type">{signer.type}</div>
            <div className="SignerDataRow_key">{signer.shortKey}</div>
            <div className="SignerDataRow_weight">{signer.weight}</div>
            <div className="SignerDataRow_buttons">
                {signer.canRemove ?
                    <div
                        className="SignerDataRow_buttons-remove"
                        onClick={() => props.d.modal.handlers.activate('multisigDisableModal', signer.key)}>
                             <img src={images['icon-close-green']} alt="X" />
                             <span>remove</span>
                        </div>
                        : <div />
                    }
                    <CopyButton text={signer.key} />
            </div>
        </div>
    );
}
SignerDataRow.propTypes = {
    signer: PropTypes.shape({
        key: PropTypes.string,
        weight: PropTypes.number,
    }),
    d: PropTypes.instanceOf(Driver).isRequired,
};
