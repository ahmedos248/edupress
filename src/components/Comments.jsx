import React from "react";

const Comments = () => {
    const ratingStats = [
        { stars: 5, percent: 90 },
        { stars: 4, percent: 5 },
        { stars: 3, percent: 2 },
        { stars: 2, percent: 2 },
        { stars: 1, percent: 1 },
    ];

    const comments = [
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
        {
            name: "Laura Hipster",
            date: "October 03, 2022",
            avatar: "/images/Laura.svg",
            text: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie dignissim sed volutpat feugiat vel.",
        },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Comments</h2>
            <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">4.0</span>
                <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
                <span className="text-sm text-gray-500">based on 146,951 ratings</span>
            </div>
            <div className="mt-4 space-y-2">
                {ratingStats.map((item) => (
                    <div key={item.stars} className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {[...Array(item.stars)].map((_, i) => (
                                <i key={i} className="fas fa-star text-xs"></i>
                            ))}
                            {[...Array(5 - item.stars)].map((_, i) => (
                                <i key={i} className="far fa-star text-xs"></i>
                            ))}
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div
                                className="bg-yellow-400 h-2 rounded"
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                        <span className="text-sm text-gray-500">{item.percent}%</span>
                    </div>
                ))}
            </div>
            <div className="mt-6 space-y-6">
                {comments.map((comment, idx) => (
                    <div key={idx} className="flex gap-4 border-t pt-4">
                        <img
                            src={comment.avatar}
                            alt={comment.name}
                            className="w-12 h-12 object-cover"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{comment.name}</span>
                                <span className="text-sm text-gray-500">{comment.date}</span>
                            </div>
                            <p className="text-gray-700 mt-1">{comment.text}</p>
                            <button className="flex items-center gap-1 text-red-500 text-sm mt-2">
                                <i className="fas fa-reply"></i> Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-6 gap-2">
                <button className="w-8 h-8 flex items-center justify-center border rounded-full p-6">
                    <i className="fas fa-chevron-left"></i>
                </button>
                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        className={`w-8 h-8 flex font-medium items-center justify-center p-6 rounded-full ${num === 1
                            ? "bg-black text-white"
                            : "border text-gray-500 hover:bg-gray-200"
                            }`}
                    >
                        {num}
                    </button>
                ))}
                <button className="w-8 h-8 flex items-center justify-center border rounded-full p-6">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Comments;
