import React from 'react'

export default function ItemColSecond({data}) {
    return (
        <div className="col-6">
                    {data?.slice(0, 6).map((itemSecond) => (
                      <button
                        style={{
                          border: "1px solid black",
                          padding: " 20px 10px",
                        }}
                        className="itemZero btn btn-success w-100"
                      >
                        {itemSecond.tenCumRap} - {itemSecond.diaChi}
                      </button>
                    ))}
                  </div>
    )
}
