'use client';
import React from 'react';
import party from 'party-js';

export function triggerConfetti(e) {
    party.confetti(e.target, {
        count: party.variation.range(20, 40),
    });
}

const Frappe = () => {
    return (
        <>
            <p>
                <i
                    onMouseOver={triggerConfetti}
                    className="ri-trophy-fill text-yellow-300 text-2xl mx-2"
                ></i>
                <a
                    href="https://frappe.io/partner-certification/PARTCRTF00018"
                    className="text-lg text-gray-600"
                >
                    Frappe Certified Partner
                </a>
            </p>
        </>
    );
};

export default Frappe;
