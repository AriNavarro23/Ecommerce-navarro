let stockProductos = [
    {id:1, nombre:"Bored Ape Yacht Club", precio: 1200, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/Rn3ZpGAsWIwODp2PdC21GgROWTYlxvK7xys1amJ7Z-HIEg3l4cN0ReAg_u572Xfp05GskW913KAu5tQyYThlbJVrc5ZS297Dfykosw=w600', cantidad: 1},
    {id:2, nombre:"Bored Ape Yacht Club", precio: 1100, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/8pSQDqVgCuRx0eZ666DwHlQPqppiRK95_45V-L_dhZbyREo0IIX0K6vNCsnqahKBrzG7Vjt6CfsojZx86PAorcthLeki4vNuBxmTQg=w600', cantidad: 1},
    {id:3, nombre:"Bored Ape Yacht Club", precio: 1200, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/oGX9KC5HSLaNBtg3pNyJvlMca_YwhR3xvSllayk86pghLCOJkvbQ8DzNuiF2ZY-HU_ZzYayTZngFnp9kJdi8J140dtErziZcfu2jUw=w600', cantidad: 1},
    {id:4, nombre:"Bored Ape Yacht Club", precio: 1400, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/-PwKyfcTNhTCiTWEff1prU-qPHunTYZfCsuJsZ_5Z_AFru6PT_cxPSYvUAuenHYQ46PU2Xq1umJqb0n1qgqXYO9Smcw_zcN2-jKL=w600', cantidad: 1},
    {id:5, nombre:"Bored Ape Yacht Club", precio: 1200, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/EE4wtZaiUGD01e9O1S34q403G9zlJ4ByPspsTFn5G85yx0iwWbv3fGRbfqMs2yorB3OjFqKvTL6rTtP3mkrOSVRixYvhyAlV3ikBRQ=w600', cantidad: 1},
    {id:6, nombre:"Bored Ape Yacht Club", precio: 1500, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/2PplRFyL3vnAF0EcuSnNBQlo-bkfGo8B-DZ3_wnVDd22Pbdrav_fEWuc7M9CtyDEQyqG-wN5sExBYbsbbYRJzTmkynA47UF6FRhFIg=w600', cantidad: 1},
    {id:7, nombre:"Bored Ape Yacht Club", precio: 500, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/cppsrlt-PdOelvemxUf8CRS-f1aautZcmcoIbBJOn9lLP4aITWLMCgh5u8N7N7RYn9B6sgSddBmoHXuJhKBk1m_1dyf0Krr_UM7r=w600', cantidad: 1},
    {id:8, nombre:"Bored Ape Yacht Club", precio: 500, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/TfC0RiZsXB6NfyrG10vLjLPOfo44zv3wuMh_adbDGwtTiB-jK2L5G8KRXRrGyKsOmjVpAl5Qd6AVFq17hnoVMi0pnsu9rmYK1GfpSQ=w600', cantidad: 1},
    {id:9, nombre:"Bored Ape Yacht Club", precio: 500, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/P52bTUvd0xHLQC9JuHV-2wr4x1tedmOgPfNwajbp4FhXJmeG-GElCkZnXhAMmH0ma9ulqbCOfFANFWvInrxzwkRywBmeqY17Jpak=w600', cantidad: 1},
    {id:10, nombre:"Bored Ape Yacht Club", precio: 700, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/O_xkGkd7NIUpoLvQ8EvPYn-blc_BZCCAAktcIJaYHiUyNWXCuJFU2lMlKdeOhuFTG9rpjxqWvqnFGHdiJNBkmjfK5wMd9PP2DjSCfe0=w600', cantidad: 1},
    {id:11, nombre:"CryptoPunk", precio: 700, nft: "CryptoPunk", img: 'https://lh3.googleusercontent.com/EuEh_zSL4_M0fe0j57MLnCfVfViOlpwRcLwQqWAAJBpj5UYOQrs1nmVQNz2LWMFzzYd89dUxsMYErIv-SUvDdju74Gpu6KLlgW8rVTQ=w600', cantidad: 1},
    {id:12, nombre:"CryptoPunk", precio: 700, nft: "CryptoPunk", img: 'https://lh3.googleusercontent.com/NhcYLLLfJX1dnLCWoFwFmeQYZJgFWJkLNJQ9Q6EkuzpzcOlKThaXpXnln_1DMl8dv72-ZrwEf3dS-tnDrbt4hUyO=w516', cantidad: 1},
    {id:13, nombre:"CryptoPunk", precio: 900, nft: "CryptoPunk", img: 'https://lh3.googleusercontent.com/8SJw3QNE6e5kcY82ijuENbKTXua--Ic0ZgCbRLTtmXtb7QL7wqVDVFdO_gSSTQtSOTAXatZzxbgr9k-eAhGnkRau=w600', cantidad: 1},
    {id:14, nombre:"CryptoPunk", precio: 1400, nft: "CryptoPunk", img: 'https://lh3.googleusercontent.com/giAsZQqX6gmZFuBp4RyoOsEnhnU_bJIQdK0MLYCF5cBD-p6aWcUACvC5j1h8yfVImtM8Ser44ei1xO_pWQTqhtvU89A7yLM0N_k8=w600', cantidad: 1},
    {id:15, nombre:"CryptoPunk", precio: 7000, nft: "CryptoPunk", img: 'https://lh3.googleusercontent.com/bMIx9X-OBEpCGYuhpWeGZkHxGeAEgczdLo7sr1d2OjjstuqU6wIdlygAfctcQbeXxD15S13WWVJZppKf2fDUk2uI7AlF9bsSZIvcnQ=w600', cantidad: 1},
    {id:16, nombre:"Invisible Friends", precio: 800, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/vvi8_rRq0b4vsQmLsXSzf8WCUapo5Wq_3M9c3mbLMiYm-xMcL8TQd56mkPq2hlN3vXp6wfGRbW7ZZ_jdFNjlH4AjFM0HYhSkmBOHyg=w600', cantidad: 1},
    {id:17, nombre:"Invisible Friends", precio: 200, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/tdz5LFJSMguPK-lLyaonoZla8XsAr6PXSi86n_pZl5V6KVziOqj0hOP-CZ5TIX1yq_v2zaFz-5UPuDRKp_AIy91eU-pVxvNxYSmwQg=w600', cantidad: 1},
    {id:18, nombre:"Invisible Friends", precio: 1800, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/V7iMFwCWYUhj13WQ958fZg31xbeW2ZFYv6Ne_7n2eF6hF0zg1n6YzpS4WYUTcnOXnQBZk2XdJLRQoFTV_sLWqBi6w44CzJ4gfPp3=w600', cantidad: 1},
    {id:19, nombre:"Invisible Friends", precio: 1200, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/T5On4Do41flwf_aEPBpF7ZLsNyM98BISLwwQxdgbtR9e_Q8HL2HKLl9AITyWdYs9hXqFOYlNIRfy0vCFXievjieyHI3yp8IQPVm4-w=w600', cantidad: 1},
    {id:20, nombre:"Invisible Friends", precio: 4400, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/TssVMi-Wbew7hqFnvF3X9_MGVBtMWYLq5H1w_3WqqsVIUV3L3jkEalonVzd_CUsAA6OH04niuAHtznd7Nr7jpOH8QVJpmbAACURO=w600', cantidad: 1},
    {id:21, nombre:"Invisible Friends", precio: 4300, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/kZq2XA9_Idx7Dyo1pSjZtuin2eVG0t4TSWmyxfvsp7ygydxl_cqMEegOPd3LtODCuu20tKVOZE-pSJAC3bfM2G2KLcusHp0er7NApK0=w600', cantidad: 1},
    {id:22, nombre:"Invisible Friends", precio: 6700, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/9u5I0RmuyGhJAUMsCRlHx4lnfFMEwntE0wAOuaxVN06d1J0S36oa0216CP2XW3DB5r7-SIbNE4yV0dYZSatlJchmnJ_zhtNDbN0sPzE=w600', cantidad: 1},
    {id:23, nombre:"Invisible Friends", precio: 8800, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/W4XZFcXrJt0iSoiBuBia5I_3N25qAui1qo3dz_yfYG3MI7i8-CbgDl1MeVF5tXvfdW_hD-vI56lAzjL3ERd4iOcAnq2jCqC5qCfz=w516', cantidad: 1},
    {id:24, nombre:"Invisible Friends", precio: 9900, nft: "Invisible Friends", img: 'https://lh3.googleusercontent.com/DZz6ADSEHAdG_hEFzKfHlG90DR9jINhYKd-HIG4K-VMMFVyxHzKfQVSbiZNMPXGkSmUSfXVcQhHNPueX-_2Aq9OPQEAiKsmxSiwExw=w600', cantidad: 1},
]