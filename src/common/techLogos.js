const logos = {
	kotlin:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2Yy28VVRzHP2dm7txXXzwKlFopwbAALYG4MFFMNLhgS9zIyoVruzABIgG6A40LQRA0Glcm/gHGxATjja40cWVMIJHS0gC1hU7vq3fmzpw5Luq99DEzd4ZOZXO/yzlzz/l8Zn6/mTMXuummm26eZUTYwNtnJ1XQoEQx7Bhsa2odJ9+X/6F8ov9cv65XN8IISpVyZ+w3goZCKSYLEj/AQEfwIOsxZ/qRa+7O/7J43Py6v9EYxfMGEhKvSAQ8RAg4umKy4CEDJDQEcznJP9lgia2F38snzMttatsewWtuS8QNdIRfZolIU4M7BRkoIRQ8Mj3u5+Sq48X8X9V3Mh/3rz3fbu7GdXfE4gZiwUMHAQBPU9wperhCBYwKrIzPvbwHQCZ7t/5udqJXEHQuOM5OHGcXEa2XCB5iCAB4AiaLkqC+FUDVALvndvW9/KmiUNG94bqDOM4QBD4iSAQPMQUApFhubEdbf3UzmuWMZ84W9Q7wrbjuNhznufUDgkTwkEAAwBeKyYJkSX8ioen15vn6DbNZ2a9pmht7LtcbwLb30K42pUq5U41E8BAhMGfKwONKwHRBUtMVSrPdifoVI+dLoZRJtTKGJuJLeF4fjcYoSmk/Jb3yrYQKzGd9ZrN+YDsqYK5Qdy8sfarlpd+eQymDWuUQIsGdEMIv5c/UjyWiXpHIEnpsSh7k5Lp+E0L61x9f03ql1Nf+xkenWjmMwOu4uKGXSwMTt5/qyrfSsQcWMz4zKySU8NUX1jVvh+utg29HCaq1wyDCmzoNeIjZxFXDZzrvoYSvPlv8vDlsN8yOP1JQqxyCgCI0MpVU4CHBU2hJ9zk3/729p+ZnRYJGrVXHUEprv7sMvVwaOH8rFXiIKSAUXJ+5WX/R0vONpX247naE1oy9SL12ECUNzJTKZmVCBZ7s0xQfPfy5+uq8KraONBojOPYQmmbHXkjKQqkvZXgAI2zA9AUavvrwUal6fNbtWzvuOEMoZZAv3MWXhchFcrnp0q5LN1OHhwgBgeLXu1/OZst7h8LOaTYH8f0MPT23kLIn8JzNhIeIEvrx3lczUfCteN4AtdpBgr66/tBem7rR+Oa3DTJGJlRgq22OxJ3E83qpVccwjEr72JXiSetP79goitMT4zOXNsgZmlCBhUdvkTHnY0/kySKVyhF0o8yV4kmrr7p/S3twEyUiH6PWwptkMtbyczRGpMzxiTm+Gr6VTZLo+B6wrNcxjDJBb9S1uTjysmX5I+vhW1Gcnnh/ZiIRYYfEepEtWkfR9SWECN5iA1wcOWK57vCWhuFzpxC5kbuQ5p2IvZUol19BaD5CrIdbhv/vyiuwDRUtkWI5Jfoiq5SPoJSxahuxCv4JILah+Lu4+RKJBABqtZfwZS+a3uCDfYetOTEcXPNq+b+lzZZILABQr+9nfM/Rhfva7i0PTcVC2L90/4PEUwmcG8tbD/WdWwEQitlnKJFYYBl+cHXZxJXYhMZOJHD5gH1v2hgMrnmhmM0qHkdJGOlLxBa4eqA+9d32vc9PFTyaoW9mxT+d7kTKErEErh6oT327/YVRAFdTTBVkuEScckpRoqPASvhWUpNIobEjBYLgW0lDwtY2LhEqcO1gbToMvpWNSgjSkeimm266eXb5FyI2k16J3rGGAAAAAElFTkSuQmCC",
	js:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC",
	java:
		"data:image/png;base64,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",
	android:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMUlEQVRoge2Yv2tTURTHP+eliTGIgq4VIooKQnF2MrUiSNvJWMQ9oOLsYIaAPybBwSmLf0BHU2hF7CJUcOrgItRB0k2ziBrrS95x6JOUkOS93HeTCLkfCHnce+4955vcb3LeA4fD4QAorhZTcWMrq8XMMPGD8GxsUq7Nb53NNXYevFk4FhVb2bh23M81Pp073HhnI7cVAYCKkk//bj+JCmz5/gtR8kDTRuIZG5sEcN+DDyB3Hq4VRFQuAKeBE2FIA/gMfAVuAM02wT0bua0IyATBdz/l1UXJi8rdHiGz4QsAUf2SmvF8G7kTH6HyWmG55Xnb4bGIhYqcp812+dWVxaT5Jcnicm3hMgSvgUw4tBW+X+qzpHt+T0SuPlp8a2xoYwGV2lKuxY+PIKf+jf0J9o6m2tlMKq3feq3pNa+w86vZnHt+872RqY090OLn7YPFA6Ql+0zSwaF+n0uveYEzR3LZW8BLkzqMBSisdJcpoqVBX2q/eVVZwVCAsYkF5kzX9uCixb0cYyXyV6hcK1wHqQIESunp8ub6/vi82izk8dKmDMrXjxgekCrhP6knWk1eqt18cUw827mUk8Z1xWeofLa60YnhBEwaJ2DSOAGTZioE7HYutT6ySgzzRQoIlNL+RlrH80rJaotm2HzGt5SjauaGZSo80I/d6JC4mHvLWEDnrCYlmbcSPRc6SLcnus901LwpU+2B/wInYNLYFBDVAoykJbEmIKoFGHdL4nA4HOPhL7qsvM+b6M5oAAAAAElFTkSuQmCC",
	react:
		"data:image/png;base64,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",
	node:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge2WXWhTZxjH/8/5SvwoTW0togwKI2wgA1kwKShS6eAIIknHBk6YKDLHLiobiGyyMYfgpILuwrvNixW0srLZhLEmdWPuYpAEKl4M3GhhY8OLdP2yTUhPTs55dtEmPTk9cUlBVHx/d8/7/J/z/J837zl5AYFAIBAIBILnF/lJGwCAiB69vyP40tSDyT/uN1srPQ5D6+BlYvqmW4/ebrbwaRkAAMBAb7M1T9UA60EM8KR55gdQnMGunljA77M/YtAJAl9bMqTP790Zma9X3HOjp0Mp+28pPnnP7J8zv1qK2Td+enz6UQ3dPUzLdwEoNax3eyIACIVOqkr71HEQnwfQ6aifJWCgTSp9MTo6alSNn+tRlC7/gLZZ7ZdkWQGA/EwBc3/PWaTSUNDqOjF8brjGVSh0UlW35t5jxicAOhypaWecScWb8kQR/VAUkC8BHKy/bzRBZJ9OJxOJ3kH9jOrTPlM02V8jYSA3kYORN0CStCSr0qd3P84OAEBjPVYHaMaTBEjfuoQZZj4GIONwF2Sm7wBA9WsX15gHAALaXmgDCGDb9ltl6+Jq0tWDkWbmY2Ckvc2t9UREx708KXBcJ5joSDY5chMAAxgMH4gdJuYbK2kZAAozeWrd1urZVtugoaWjBYv/LkLboJEjVdsjVbeHt37V09dhPfoWAdcrupqvUDY5MrQiBABeiWswiyZKhfovXWB7ANpGDbLqfc1qpIdbH76yb3/35b1/ha/s259NxVeHZfywrs/o7IM5sMWeOZIJgR2B9Ty2GSYBeiMzFj+o/L+2Frtso1QwsJBbQOt276Pkb/HDyBueubAePZJNxSu/AoUPxA6DvTejqv8gPgSgq7KWScWr70fTA5QKJYCBhakFbGzfBNXn/YhNWzY7Qwsr55qA6xE9eoqJviTmd8AccenW6Lv12PsgnEknR+64+ziPUKKO55p1ySddlYgsthnz/8x5Fthl27LM8tVKTMSvAzThkESI+SsADvM0saxbq2fwbmb+OaJHv9+tH9rpHuB3wI5lUvGol5nldTu2rAPuns32m9JSQFGVW8XFIhfni1Ut2wwjb/xiPTQ6b7892l9ZTycTifJ0504wvQsg52oxS8CHWyTjlXQykXDqiekUlv/oKhyUIP0U7u1rr47tuYUNsut8JOjTpJsdL2591VwyJ2FbfWNHx357VE3otTdbVdk4y6CjBB40Ld+F8R+HHzagb+h6IxAIBAKBQCAQCATPDP8BaEOaEZ1yEaIAAAAASUVORK5CYII=",
	typeScript:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACtUlEQVRoge2ZXUgUURTH/zOzsx9+7KqRu5qmlqYFRWRYRCBhVK9GgVEgIUUIRfRgPfRQT0E9SEFgEAlBSUIJhVBKQgUhgmCxKX2gJe5Oie7abjqT48z0EG3NzO5ObTH3oft7O/feczh/5tw7584AFAqFQhIm1URR20vNzkSsEC5uSJora3ci/xoqgDRUAGmoANJQAaShAkhDBZCGCiCNI1PHB62rUVuW9Uc+l/o+of3xNADA6WDQtDkfDTVe1ARc8Lo5AIC0pCEUXcQrQULH0xlMzHxNGzNjAX9DwMejq6Uc1X63ac4HwJ/rwKaVWegbjVkKIFJC7ftKTMkvqRqiC4puTJJVy1gZP4Gz98PweriEzTJAV0tFwh4TJJzrFXQ+H2YXUZrvRP2anMSYqgGn74XQPRyFrGjw8Cy2V+bg8LYCiLL1rTZjAS+mRH0gVn9l/SwpePb2i8lvR3Wuzn7yJo5bQ5GELcoq+sdi6B+LgU15Y/+J7SXEGZIq8vFwOpJnqv7GZwXbBYx+lKD9klhNwI27R1dh/QpPRvFsFxCek9E9HNWN1ZZl4eHxSnQ2l2FtkflkSgeRU+h8r4ARwx5iGGD3Oi/6TlTiQmMxXCnKyggRAXMLCvZfG8fNwYipzjmWQfPWZbhzpAK8ccMkgVgrMb+o4kxPCHuuvMPA67hpvq48G631yy3jEO+FgmERh268x96OcUxFZd3cwboCS3/iAn4wODGPpusTurHiPB6MRRXZLqDa70bjxrykiS0ZNkRcUnRHbjJsb+Z8Hg5XD5TiZEMhekbmEAyJEGIyAl4ep3YW6tYa3/bJINKNAkBVoQttu/xp13Q+n7WMQ0xAOjQNuDwwjUejMcu1tgsIhkUcuz2JLeXZqPK7UJLnhM/DQVE1TEa+X2S6hiKmF10q6B8aCoVC+b/5BqCKzSRK+tlXAAAAAElFTkSuQmCC",
	spring:
		"data:image/png;base64,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",
	cSharp:
		"data:image/png;base64,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",
	azure:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAE+klEQVRoge2YXWxURRiGn2/m7BbKn0UxUooELFt+otVoTEi8kAsloiES06Q/W2xCRI0QRBAvJFrRSAwIRvGGEK3SUpIaL0w03BDQaNDEC5tY6LJiIQJiUKsx/O2ecz4vKEsXds+eXRYvzL53M/PN+73vfOfMmTNQQQUVVBAaHUNjyk1pyk2YF23JOpt2W8tN+58YcFqSCyy63/Pt5+XmvuEGbGuiWY3uU+iid9Zv5ea/gQZUnHiiE5HdwLBvzr9zI7I4N4KU9v5x1k/uUpWlAKi8wq7Gs5nxJrX0iVeOVOWvQPNgrfXHfgksBRA47J068VFmvOnoJBtN7ixXurIaiDQn77HWfAvce7lPVddxYKF7ue1UuWuADqct+XA5cko5SABsa7IJ0S6gelT3Aa8ntjDTajo6yUa9IaBG4JB78mTjaHOloAwVUDGtyZcQ3UO2eDVq1mUli/jPAzUACvNM3bTl15v9+irQMTTGuumdKG05mHu87lg8025LTrToMUYMjMSc8ZxIjK6Zf5UqofQKxA9Nten0VznFQ8pLy6tZiURXM1o8gDLFSbsbStZAiRWIxBONvspnwO05SYUtbnfsxUzHpdUfAibnCE951ruTj+ceKUVL8RVoH5zpq3xDHvHAsHsxvSk7ia4it3iAqPXs5qJ1ZLiLhPXsVmBcvnFV3qRv/p+ZjqaB8SKsLkC7pNRttSgDTvzIQ4g+HhByzI9GtmcliDqrUKYUZtdtPLi/6JNBeANNA1GU94I1yAa6Zl7ItNv7x4nImjD0CvNMbd1TofWMILQBE42+oNAQIKDfi9X3Zs3xqleGW/1LENE3aBrI967k1hUqallimqAvBxPpWjrFz3S0948To2uLEQNMdqqcorbVUAasJ5uB8XkDhC/cnoZ9WX0X7rqAcrAYMQCqspL4YN5KX42CBpyWxANAc0CIb3yurU6feF6VH1f4IayYEUSsmi1hg4MNNKn1jWwn+IPXld4dyy3ygzn/+J7/KPBLWEEjeMxpTS4KExhowESSzwk0BoSc9zzTGZhhz5xT1pjFwN9hBGUguo0V30cKheU30P7TrSK8FpgDtrKnvuDqpnbV/yhimoHQR2eFuebshBWF4vIasL6/Cbgp70zhjJsKfwRwu+v3Ivps2PhLKWQjyw7fHBST00CkffA+oCNooqIb6bujqMfC627YKcjbRUyZ7Hg2cFu91kCnGt837+ccu4Kf/YvujiKEZODOrl8PfBo2XmFltCU5P9/4NSJt8shy4P5AVmE9ffNTYUVkoVN8LzU2DqG/EY5n9K38Ukaj9XiNNRcTBT7/33k9sxeAaEgBudGSuMUaOQjUhwkXMY+43fV7r+7PqoCV1OuFzi7i67rrFg/Q2/C7Z1gCDIeKV39rrm01YyASTzSCPlOA5hO3t+HrooQGYVfssKh5Aij4OCrMNecmPH11f+YRsm3JHaCzQU+IyGlf5aSof1oMJ13sr1RXn2JH7bmyiR8F25Z4EuRDCv/i/uGl0rHRP0xluxcKhU41DCZuc8TOUKFOoc6gMxTqEBYRdGAcgcC7bk9s9ah2GdF6vCaqqVpfdKrCLDFaq8hUlFnALGA6UPB4UACu9eXuVO/sASj1crf1eE1UztV52BmqMl1E5wIz4eIYb9SSqEoVVy67hsl+YbOvWK7MqgapyjFggYmA4xk2A4tL0l5BBRVUUMH/Cv8CbwGRQ1sHL9MAAAAASUVORK5CYII=",
	git:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge1ZPWgUQRT+3u5d/MkZFDRdJjEWNkKKWAmCYCFqc5cQfxB/ComJIdFKbYSgCFGx8CQxSkT8Kc2dvYggpLIxVjaibgSLXBHN7iXx9u5Z5A6Ou92d/ZkrAvc1y7zZ9/b7dnbem5kFmmiiiQ0NakRQBshKiWsAxsqmdGvWuEcAq36WcgEMUD7V8YhBIzX2mUSPcYnGUVL5PKUC3MhX9SsXoUyAjHzVfUpFaCqCAMByf9deJrogu4+Ai+a8mGRFLy+yAB7sjS8lO/a0zf74yuBjIFgyHwKGzJSYUiEikgAegG4t5l7GiD5ZSdG7LbPwsQQcAbAs8y2LeMrj0TiEduYB6Fah4yXApwDsYMI7Kyl62zLGXIlwFP5EXDTnxZMoIkINIR9CzNouXoNwsqYrB610ODH764uZ2t3DWtHWitjM4NMgugpAd4wHTCeyxuUwdSKwAB6AbtmdrwA+7XJLTid9/5bM95/VxuVkxy0iuukaN6SIQEO3Tl688CAPADvX1op/a42xeHzGK3bYie1bwPo3L54DOCMNqtl1n0re1JZkfmFE+BLA49AsWzwD4ayvoDH9XK1N37S2qxEpViqAx6FZX8QzAOf9BCzTmDBT4nqltXRc7Nj+duFbI+qEpwAGyJwXk2BIK2wN4gAmKo1YnD+v9ovuRtQJ104GKN/XOUnAUBDmzmxI2EX+sNovulXXCccOBsjsE9PMPByBdg0bEnYJ71eSXV1tGWMO0A+yhn3E2A/mBwCKjm6StZOjsfz9Tjj1BUEia1A5XnVu/0FEB1ozP39X3yurEwBuJLLG3Vqj29CMudhVoKvEsbq3LasTAEadjMqW00HA9krdXsBGfiVMLDcB6TDB/EKPx5N1RAotKU8ndubkOAcYIDMlpqJmIJc5AAB/wDzc2t7+BgCsxdwJgKcAtLnwcV0nuRYKFSI8BFTwr3xt8eDhuchznQME8LojT/olHAIt8CY/k+gxRrxWqJ6TmADeml0YZWA6IDEG8LCqnUbAZXL5zQ/KNv/SLFQZiSAiGLidyBpXK+1E1rjCxHcC+PveG/hKo0FFUEx7XPcgG3U2JwTd2PiuA0FElFb/2XW2TYWCzC/MrixQIfMrIkyeD7ulDLepl6dYZXlehtAHSz7rROQ8L0OU8xg/dSJynvfBIxr8Huo6+Ck55FVywBpUhMoT6g1/vN78wVGLDf2LqYKqn3yjZUO69a1xvxE/+ZpoookNjv9pxtAxljvmYQAAAABJRU5ErkJggg==",
	postgresql:
		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAJk0lEQVRoge2Ze3DU1RXHP3d3s5vNm82LhEBCTGKMIQk4PIsiAbVWLK2OA1pFC1jF4tS2Uh9VRxGrtRb7QO2Ao8NUO2KlCT7wgUVCABFMEAyYEMAQTALkAeS92cfpH7/dZLO72d2kZsY//M7szJ295957vveeex73B9/je/xfUIE6RWQmcDMwB8gAooE2oBE4COwEtiilzgZbSERSgOmuX75rvglAONAKnAYqgA+ArUqpnpFR0hZLFZFSCQ12EdkhIitEJF1ElonI+yJyVES6Xb+WEOdyo0VEVotIZDBdfU5ARHKAj4D0dqudf+xtoLSqmermbrptDmJMBjItZqaMi2bBJQnMyxqDyaAb1ga1dNm4p7SGj2vbsDmE+Igw0seEc02OhWtz45mcGu0WrQduV0rtCImAiIQD+4H83ScvcNM/v+RMZ19AZeLMBnatuIxLkrTN2lbbxsaKJiq+6aCh3YpBp0iLNZGbFMlP8hJYkJdAjMmAzSGs2f41T22vQ2TwnLMz4nhuQRZT02IAbMDdSqlXQiHwLLDqYFMnl79UQVefI6DyAOtvzGXZ1FRaumws3/wV7xxpCUr4keIMVs4aT5heUVLVzM/eOIzV7hwkp9cpVl+VyYNz0wGcwC1KqU1DEhCRKKBBhJhp6/ZT2dARVPmbi5J5bfGltFvtzFt/IKQxbsyYEMPm2woYG22kpKqZRf+qwuEUH7lfXz6B567LArACRUqpas9+T+NdBMSUnTgXkiLRJj1/XpANwF2ba4alPMDe+nYuf6mC0x19/DQ/kSeumuhX7vnyel6rPA1gAlZ693sSuAJg06GgHhGAu2ekkRxl5L/H2njz0JlhKe/GibYeFm48SJ/DyQNXpjM7I86v3AuffuNuXubd50mgAOCLxtB28hfTUwH444760DX2g8+/6WD1x3XolOJvC3PQKd/QdKy1PyRkefd5EsgEqGnuDrpofnIkmRYzzV02Pjl+bkSKe2JteT2N7VYKU6K4Pi/Bp797wJn4sPMkYALotgX3PFfnxAPwYU0rTm8fOAJY7U7+susUALcUJfv0x0eEuZs+5mHwaOsBHE5vEV/MydRsNcKo5+3bC7g4KRKTQXG0uZuX9jZQerjZx7f7g04pbpsylpuLkilyBa+rsi0oxaDxqTEmd9PngnoS6ATixpgNtHbbAi6cYTEDcEN+4qD/x8eGMy/LwlPb63jsoxMB5zDqdbxzRwHzsy2D/jeH6XzIT0qJcjervOfxNKGjABcnRgRcGGBCnLYjlQ0dLNl0hNzn9pLx9B7uf+8YThEenpsRdJ6Vs9KYn22hqaOPOzdXM+3v+wE432P3kZ0ykFoEJFALkJ0QnIBRrw0rXl/J6wdOU9vSzbtLC3ngynS6bU6UgsWFvrbsiRsnJQEQF25g7YJslk7VvNr5Xl8Cc7PGuJvlgQjUAOSEQKDdtYg5TN//37rdp9CpAS9WNLBrfpEcpV3Mth4b53psHHe5yuauweY70WImVzvNFqAyEIEvACaNDZrBcsFFIMY0QGDDvkaSVpdzb2kNALlJgTfirEvRO948wsRn9nC8TSPQ6kXgutx4d3ObUsrHxXgSqASYkR6Ln1gyeJBLwE/qQkO7FYDESGPAOT4/1Q7AFRM1j+b29eFeqfmtU8a6mz6JHHgQUEo1AGfiI8LIdHmZoRDt2vl2q6+9nu20DZIZCiWHmzUFJ49FKa1GAEiKGiB+SVKkO6VuBd4PSMCF3QCz0mMDLh4Trnnf9l7foOfewWAB8ZPj5zh8pouJFjM35Cf11x3jYvt9Psumpribm5RSfgsTbwJlAPOzLH5EB2DS67A7hT4/US8lRttBb1v2h/WfNQDw2PyJ/ScQG66dXIzJ4PZMArww1BzeBHYAzHNFQ78DlMLmdKJTEGn0NZMp4zTvUx1CTvXyvkZOXeglPzmS5dM0N9rVp23KipnjiNVOeqtS6kioBKqA5pRoI/nJUf7kcYpQ2dCJTimKB/xzPxbmadF5W21bUAK9didPflwHwJ+0ooUDDR1Em/TcN3u8W2xtoDkGEXC5qS0AN05K9DsA6M//H5qbgV43cFRRRj3X5sYjAiVVzUEJAGysaKLqTFf/3Xnl80YeuDLdfZnLlFLbQybgwr8BbioYOpK+vK+RhnYr08fHsHZBdr9bXVSYTJRRz66689Sf7w2JgN0pLPGoieMjwrhv9gTQbP/BYOP9EdgOtOQmRlCY4t+MuvocLH69CptDWDkrjfd+XsjsjDiWXKb57A37GkNS3o2DTZ2sLdcKo7/+OAdzmA6gC3hKRL4WkV4ROSIixd5j/V5VEXkRWPHK/kbu3FztTwSA6/MSKF1S4PN/2YnzrNtziv+EaEYp0Ua+/M0MxpgNiBAokLYBqUopazACeUCV1e5UWc9+SmO71UdGKXh98aUsCpC03bvlKC8O1LND4smrM3m4OINttW3c+sZhJqdGExtuoKvPwbHWHnpsDr66fwYRWu6VqJTqf7vx+6TmcltbTAYdq+ZM8LvoH354EYsKk7E7hT0nL/DIhyewPL6ThCd2cv97xwB4ZF5GUOUBil1x55kdJ2npsrGtto23vjzL+zWtjDEb+GBZkVv5nZ7Kw+CCxhsPAdfdMzMt7K1DZ9l98kJ/x13Tx/G7Oen89t1aNlY0cc4rh3++vJ4112SSHGVEr1N+33s8kWkJB6C2uZv4iDCSo4zMTI9lYV4C1+bGu51EFXCL99ghCSilqkXkUYNOPVNyewHL3/qKXXUXuHNaKmuuyQQgJzGCvKRIDp3upMPqIDbcwORx0fxyZlq/W9QpCFZlJ0RqqXX9wz/w120F1gGP+nuxDva8rgM2AEv9dDsZwgQ9Ef77T7A5Ap+A/eli98W1A71oj7pHgXeBt5VSQ3qDQCaEUsopIsuBvcCv0N70vwCeAJqAu4HZQA5gRns1qAVK0UzQrFBoLj04lFJhwaWGQcA1qaCdwgY/3f1PfSKi8yw4RGSVNn64Kg0Pw3vYDwA/1ZIOgtjot4BvjcBQ8MyVRgOjSaAFIDkqcGmZHGV0m1nnSBYZTQJ1AFkJgctTj9eLoXOWABhNAp8BzL3It2bwxI8GXh3KRrLIaBLYCtpXnDC9/3twUbyZpVrdK8CrI1lk1AgopcqA/eNjw1k1J92nf2y0kZIlBe4c51Wl1OHR0mXEEJH5ImJ3OJ3y6IfHxfJ4maSuKZd7SqrldIfV/U34gIj4/zTzXYCI3CciziE+aH8gIr5fNL5rEJE5IlIuIj0i0ioiW0XkBhEZ7Tj33cf/AIA54sPbO7YUAAAAAElFTkSuQmCC",
	aws:
		"data:image/png;base64,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",
	angular: "data:image/png;base64,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",
	csharp: "data:image/png;base64,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",
};

export default logos;