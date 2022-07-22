import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import Comments from '../components/Comments'
import Card from '../components/Card'

function Video() {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe 
                width="100%"
                height="720"
                src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
                title="Youtube video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
            </VideoWrapper>

            <Title>Test Video</Title>

            <Details>
                <Info>7,948,154 views . jun 22, 2022</Info>
                <Buttons>
                    <Button><ThumbUpOutlinedIcon /> 10 223 </Button>
                    <Button><ThumbDownOffAltOutlinedIcon /> 110</Button>
                    <Button><ReplyOutlinedIcon /> Share</Button>
                    <Button><AddTaskOutlinedIcon /> Save</Button>
                </Buttons>
            </Details>
            <Hr />
            <Channel>
                <ChannelInfo>
                    <Image src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcVFRgWFRUYGBgZHBoaHBgaGhgaGhgcGhoZGhoaGBohIS4lHCErIxwaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhIyQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAABAwIDBQUHAwEHBAMAAAABAAIRAyEEEjEFQVFhcQYigZGhEzJSscHR8BRC4XIHFSNigtLxFjOSwjSisv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAQEBAQACAwACAgMAAAAAAAABAhEhMQMSQRNRMmEEIkL/2gAMAwEAAhEDEQA/AHUYQQUBUoihKCAiiKNBAmEMqUAlhqBDWJzIltYom1sQWMLho1pJ+iAOfJbPuzzumP1bhULWNzaXgyB+bhcrKA5zne+Cd/AclZf3wKTD7IXIHeJvru5lZa1fxvjE91roYG5qhdIH7i0EHjl3brarPbd2tTqww12Nb8TWucTydEX5Kt7S4pzCAX3LWid8Bo0G6SSVTMBB0cQACbkDW4J4fwspnvmtdWTxEnE4ppIFAPzNnvAwb8DP0CmNwmLewAuquaRo4vc3jreChsvtd7HujDU4ANwS08byHStXs/tJSriMvs3z7mUEE62Lb3/pm29NXU/DMzf1m6eFYykfaEyS2B3QTOsn9vWTp4KNiK1JtmCZ+B0xAiDvJ/nRbfG4dz7OYw9czSREwHBxHnlPJZPbmxw2XtaB1cHkcjBuDe91Gddq2s8ngTNoezYGtGW+axJN9Lm6k4DarCMj3XcQQdMp0BzNv1lZF9c5pJm95JM+ZQfUuHCY+vPnZX+qn2dBw9bM6oJ9wxDiJuAZHEHcenRPU6gJgGeSzdF5cczRDyGOa46GWAmmeu478pHSE/HZH52OtqRvaeBO881bO/yqb+Oe42xak5VX7K2i6pGaCDo4eoPNWZC1l6ws5eG3MSC1OlJIUoNwjCVCEIChElwggEo5SUAgVKCJBAaACARhApoTjQktS8tjGsGOqBOIqtY0udpw4nksVt/bb3y0WBsGjTx4qX2i2k4wBaBfkYuFlMRjye60AHj/ACoq08FtqTDZ5nwVlhGZ3GLndyAET4DeqZhiANdSeZ0CvcI/2dgRMFzzr7oMMB4aTzHJZaa4P9o2tqVmEOsMrXHSQ2GOI5AtPXzVRjMRLnAaEyb6kyY8JiOSce/P+aDj1KiVGx+eiiL3+zJp71p9h4p7GltPDvfNy7M4eB7sEcrrMhysaG2KzGZGvcG6RJiOnl5dU1OxGbJW0w9Wm2P1GGNGR77aj2ttf3WOAHWFPxWGpup52OD2GYLKmeDvGZ5JHS/RYVu13S3MA8i0kxu1G6easqePdSh7Bd4BMgFj2mYMDmCIMwWlY3NdE1EbaOAZGdjg4Ge49uV2/wCvAg8lTUcOXyGNItLmkiAOMmI8fO60D8dTq6sLSbOYHdwn4mE3Y7hcjclYWgxjDlaHl2uezTBhrSAREXm8Sd4F7zXIzue1VUa+UgG490RvtFjw0Pgl4+nvadQNBbcZ9R5qRj6RbcNbkJt3GW5A5ef5dR6dRoaWmbkWAgNImHNGnLx0Cn/ZZ+JHZjG5Hhj/AHX+h3H6LauC5o18OHGxHVb/AGVihUpggzu5iOK2zfxzbzzyklJKMoldmCCCCAIIQggbSkQRoDRogjQAJTUQSwEC2hLySCOKS1FiquRj3EgZWkydNN6Dmm2a0Pewmcrj+BU4MkQl4urmcTxJQpCATvi3jb6qKsk4YhtxqNP6vi8PmQn2PGg0g5vG0eqgUnkCeH8fwnwTEDU6rOxpm+D1OpcqV+nzDNMAWAOvXxP5xXsvZ2cEn3G//Z1rDzFlYVKYMn9rJiP3EaH85KlvlrnNs8qUUJ7rRpv5o34bKQ0yXHdwJiJ/N60OysK0B73aNOUDeSBLieswo1GjnquedBeeYEz4aqPst9PCudQcADEBpiRYTwlTdn1mvBpumDJaYuz4svEGAS3/ACypW0Gh4AFmCzRuHE9TvPRQKGGcHyJEHUWPgVXvYvzlOuoAGwt8R162gx4qwpt7mUT7txMnUH6BLw9Iv1b3t4bAJOs5dE4yiWG4vz+G0HxKi1eZQ6bSWFsGIB8jE+qiVMrRBg33jT85K+ZhhBBk2dfdFjA8/RUONBJiO8DFtCL205Kc3qNTkRqmFzjMNZkNB3Dgfpqpmx9qeycC4iDYjiOPVQy0gERETLhv5A7hO5RanebLgbEGfHj4LTN8sNzsdKdx4pEKo7M7R9ozI6zgJHAjSyuiFu5CCEUJwhJhAlBKhBAylBJCCByUEQRoDCdaE21OtQLaFB7QPaMPUDtC0hTXvDRLiAOJWJ7Y7ZDx7NhloPePEoMfllyccNQOKRTN/BGHXCirQGHQc1Z4OjnI4nf8LRq5V9FkuA4/VWdGtlmOXgLEDy+iz01xP7X9F+VoawQ1pgcZuCeuvqmGPAbyazzM/wAKHSxMMBn3bf6oMlJwzyQLbyOuh+/msuOjq1kmkBa5JA03C59fNDDN7xMaNhvUmT6H5JxjQSG8Rf7epUjBw0wW/t38dZ8reCrWkhx+GD4a2xieREehT1LAwBwnfe07vAeqbo0xmEjdaZvvV3gMLmAD4sXT4EgfdZ6vF5CKWzh3C1gLrzIB7swS3hEkzKiYzCPYwZg73pvGmljMaXstjs6kJyxud5HKonaChlpOIk2gSSSLgWnjdM9s6i688ZJ9SKZdF8rsokakiSbaRPkFUUcJnAMXcZ9Q0Hnd2p4KxYyWFg1cXA8AA2T4XU3F0ixlPI2P2l3BsOOnElkq3eHOsttbDFr8uaQJ1MyAB9SojMKXX0GUnqQ2w9Vpm4E1Q4xc5R6anrHomNr7PFOmw3Nr3/zkk9Tp4FXmvxnrH6qez7izEMaSQHTHUiYK3JCwGPxE5XNN2ZXBw1vAI8DC1mwdqCuwTGcAZh9VvjXY4/lzyrJElEIQtGRCCVCCCIAjRIwgUEpEEJQKanmpkFONQVe2g7KRIyxcSuebRcMxC6B2goPe0Bmm9c7x853TrKJ/DNFsg8oCIao6G/w+qNjbqtTD9J2WTvAMePd+s+ClMZInifkBPzTFPDyC7gfsB81OayIaN0i3qs7W2YNlC2hk38/+VNwmFtr3jpyG8/nBIpzcnU6/wrfZ2HuCbkgiOEgiPVU1W+ZDjqWV067xy13b9QkU8XLi8nvCJ5gG8eZUjEsMu11j1UF1PLJGsX6W/hUa1a4J4c8RcTbodPQLT+zh8tiXAZuRAsfkPJZbCywDjHysD6rW4R988aggX4EhZ6nlaeljgnHMeLQPnf5eiru0dY5Q0Gd8Rv3T4qzwlPKJ+I+JTTcKHucTuMfWfRTJ4V8d6xtChlIJvDnCBxdLc2t4geS0O0sI2GwLQ4t4klpAJvGllMo4BoLgGyc1ybyS5p+9uqc2hs1rhYlog2bppoZ3JZafadZdtXIGRG6+szB+ZHkqPtLX7gZM7/ATHSdfEqxxzgCANGX/AOVn8bmcyXakmeN7+n1U5n6aUlAw7lp5rQdkqWWqbxY+I/hUjmRuutZsRg9qI+EO8xf5roxfLl+TP/VfkIoS4RQtnKTCCUggr0YKIIIkoJYSWpbUQU0JSSEcoGsa+GP/AKSuXYunpOpkldSqAR3ojmufdoWMFUhl+nE/gRKlpm5T7BAHn+eqjht1JoXBVamLLCmwHEg+RUukzw5cFFwQ5K2wtC6y06Mn8LhA4aH7dVZ4CjkcHTIbNuabw7S124j84Kwp5YIFjr6+qzrozIZr0MxEakknx3KPWwt+RMHpvU0YkZ5/DG9QcZiDpe5URe2JGGpB1Qtm0Qf4Ws2W2O4R7u/Tp1WS2XSIDnEGbDwsfr6LSYbFjNOlvRVs8p/F3y4adEbWOzENbYmY36AfdRqGKbIlw5qwo4xgNjJNlecZa7B0qYaSSIzCR1EfSPVCoMwI0MJ04hhEGBFxcSDyQc8RYqeRnLe+WH2kwMc8Fuh5Ty9R6rI7TGUk313ra9p5DpA/nfdZHaTJaOJHjYR8lnmcre+YqmAOIMGN9tOELU9n8IQ0PPwho8N46rMYMd4iefWASptLtUKIyOZaSQeRMrox7cvzemyRQqPZ/aejVtOU81dU6rXe64FbOUpBKyoIKpKCIBKRJYCMKJiMaxg7zgFndpdqmtkMuiGpq4lrRcqkx/aVjNDdYvGbXe83cQFXuMoLraHaB9SwJaPVQaD567ydVCS6RulSlPHqnMMLJt5k8lJoU5FlVaLbB1WQBBnqrF2JYwe/k/qIuqGC1sCx4/ZJ/QOg7zrr73is/rLWn2uZ4i5/v68Bwd0/4un8Pt2DePr0Kpdj4IlzmuZAc5h9pUzN9kGuzHJcZi4d2Ena7O+SySNJ5brqbjJPl01ZxTHw4W6SFY4PCNeJDZgi5JJPmue4eu4HWy6j2KAey48VlrPHRjf2BmGddsQD8lExVAsuTA/PNb/EYQAQBdZbtVs/uZWOyvP7juG+Oaj6rfeVj8Rt7JOUExaZjwCRgu1L3l5FNzsgLnkEdxoBJJmJAAOiJmxzlLHkEHeJkcxqp+wuy4Dw6o/MyRmYxpb7QC+V54cdfBaSY/WWtfL3wvBtIsLRWY9odcR3h45ZI8VpMDimPALCCDzlSP0jahDnMGkAcun5okt2axhlgieCpZPxea7Oa9qTtCzM09CsNiHguI1jTnrZdJ2nh5afK/PisA7CCS4k91xFtSZA+sqv61n+KqfUAzkCCGmI/wAzSFjK+JLzdaTH40e1eAIHu8JLbkx4rK1DJMLo+OccXza6NjzKn4faFRl2vcPFQWBPLRgtf+pcR8aCqUES6nXxDWCXGFldr9p9W0/NZ/H7TfVJzOtwVeQgk4nGvee84qKUaJECSkSNAEAUSCkSqTrXVrgwqJjlcYKpIBVNRfN8rd+FkWTuDoEWv5qVgCDrdWYpN4LG6dOc98q+rTyjf5qkxbCVocSYCo8bUVs03Fc1kFdU7FCGA9FyvNddI7FV5yt5D881Gz4f10wMnxCrto4APFxKsnWA6JquZCWKS3rJV9itnT1UjB7ODY7zlY4hyTTO9Z1tO8S8OI8FKIUamfJOPqq0Vs7UbHwAVznaThSpVahdAEmN7nO3fnBb3H1JaehXD+1u3nV3mm3u02OIA+IgwSUzn7Vbevpj/alxGLLwSdSooCCUxdMnHDb0+xiVlRtCMlEBbggihGghkoSgQiQGiQQQBAIIBSDRFHKIoAFOwL7dCoAUjCOvHFRUz21GAxMQr2jWssfhnq9wlWyw1HXjSRi6tln8XVVjj32VE90uU5iu6eoiXBdI7C0ocCei5vhX98dV1Ts6RkDrCSP5Ubq3wz23pdIB3Jmo+xSqBAp3KjvcCIBuUqcxVVsYCfolUKwVXtfDOYcw03/dN4PEzCya8jUUnyEiq9RcO9PlEc4q9t4jJRe8/ta4+QXn6o6STxM+a7T2/wATlwdT/NDR4mD6LizRqt/ini1zf8i+ZCSjZqkkpdLVaudKmySSicdEmboHkE3KCCOgQhCAKAkECjQEUAggpAQKJBAAl03QQUgI0FpRfBBVxhqsDVZ+g+Qp+HqLLUbY1xZYl8hVr2KS82k6JgX3yqxbXky8uBBAC1OA2w8MaGgiFWYbCg6re7J2HTNEnMxzo5GFGrGmM6nlaYbFPxFNjWvLJHeIgu6N3BW+BwbKQ7uZxOrnvc8+pt4LL7BaKJcHvDWzYk2PRX9La2HGtZn/AJBUjWyp72hwggKnxOzQ12Zo335Ka7FiownDy8je33Z5vNvmqVmOxLXZK1IBukh2bysFFItKbYT5eiAloP5oo760BIMR/adiv8OnT3ucXHo0R8yuY7itL2w2n7fEOIMtZ3G+BufP5LOOFiunE5lxfLr7aphO0gmk9SV2Zbykg3QcUgG6gO5kEzKCAyklLaxx0aT4FOfpn/AUDKJOnDPH7T6Jt7CNQQgJBEhKkGgiRlAAjRBBApj4KnUH3Cr0dOpCrYmXjTZg9kKN+nI0kKNhMQrejUBWd8N82aRGB8++fIK1woeBLamQxuBH1TZeNzQp2D2c6odcvQfdVta5DCuzEZ6j3cYgesStXsr2DSCygC74nd48bk79yj7O7KsN31HnkMov5LS4Xs7SZEF55F32Crbfxp2T2k08UIifDRIqva7UJx+DYwd23mfmqnaGKDN4CraSRMqVg0a2WF7X9pMjTSpnvusSP2j7qN2g7V6sYZdx3N/lY+hh31nwwF7jqfqSbBaYz+1j8nyf+c+0ZyafoVr8D2Oc4TUqRuhgnrc/ZaPC9lcMxvepZjzuTzvZXvy5jPPwavvw5In6a7BQ7P4XdhmW3ZQT6hHX7LYR4/8Aj5ebQGf/AJIUfyz+k3/j6/txtxSQun47+z6g4f4T3MdzOYeIN/VYra3ZjEYckvplzR+9neaRuJ3jxCvnedM9fFrPtSygnMh4HyRqzNfZwidUTRTT6gHVVScqPUf2Jfppx+yfpUibu8B907VeGtU9EF+FYCGgSd55Dh+b1JbTAgRH0CbwjcxLjvMeAufUjyUto1PgPD8KWiHUw7T+0Jp2DbwPmpwCItTqEH9G3mEh2C4OU7Kg4fn54J0V9DZznuDW3J3AKazszXO5o5EkH5LX/wBn+CDqr6jhZgDR1dMnyB810DE4ZjhJaCeiz1uy8jf4/imp2uE1tlV6Jl1NwHGJB8Qn8PidxtyK6z+juQAQOCZxnZmg8d+mDzHd9Qq/yd9xp/D9fVc+w7xK0mzsR3TOu5SWdjcOSYzs5h5+spirsDI6G1qkD+j/AGqt1Kvmaiw2RtjMYJ0O/XXetN/fjGt7z2t6m/gN6wVDYwzk99x3y4jzAhX+G2aGCzQOghVtXnn2mV9uOeSKbHf1OlrfW58AqfaGz/aj/GxDmT+1kAnlmcD6BXGGqyctuu8j8+qbxWyBnzkz3ieWXcPJR1a85xiW7Fw7X9zPUg3LyI6BoAnqVqcPs0HJAy5dwAAiOATLsKyi7M6zXGx3dJScR2lp09CXHcGx8zZWtulJ9cz+l2ygGWkAxJ580zX2gxvvPa2OJAA5rC9odvvxOWDka2fdJzGeLuHIKgibkzzJJPmVafH1nr5+Xw3bO2lMEkSejXH1hPVO3VL4HOPSJ6klYBjSkParz44yvz6Xe0+0tWrUc8OdTmBlY6IA0g7z+WVLiQ99zWc+b99zz8yUh0m+8fJP0mg2Oh067/v4FXmZPTPWrr3UT9K/4m/+SCnfpDx+SCnqiI6qTYJ+jSDbm5TLTGiU56kPGp+fniouLqyhm/Pz8so+IFlHBaYFsNbybJ/1S76jyTw0HRRmvjP0j0DUb6ijiTjiiKaa9B9RTwOJLj6Jo1EkvsVHB0TsmPZ4YWu9zn6f6QPRarAY8FoDgJCpcNFKhh2FpLnMYA0W7xaCegEpNepk4SNQsL767MWfWRpxiWG0JOJqDKeiyDNokGZ3E+ib2n2gBEMKhNvFrUxQbOQyeKVRp5jJ1WawOKnUrQYbEWUWJ+39LSlQaLwJUl7QqkY4DekYnbDQLEfZPCvafxOHyOkWvZVmP2+0Agm416jj91XbU7QEiJHVYzaOOL3Ei5OvBWznqdb+sT9v9p3Pa6m2Mrtfv15rN4OsScpOunVE/DuJkoeyywRuW+cyTjk3q6vamao2MSoB033HjdKaEVJa6ClkSouIBCaZiSFPEJ+SDKJjIJA1Fx+dEy7E2S217sd4H5/VQJX6hnxfNBJ9gxBEoGdJL03mRAqyDwKarGXDw+aNrk2Hd8dfkglh9jzP1lCo+6jtd3R1+6LPdBIzoGoo+dEXoHy5ILptxPzKbD0rDu7zZ3GT0An6IOmVdsNFUPN2sbkY3iYDZ5D3r8AFXv2oHNJLpc4yXW8AOQH4VlMLhsVW9xjjO/KQL2mTbxUr/pLEuuXNgEhxLicpGoIA4LH6ye66M3V9RIftPvug2UZlaYVvg/7P3kSa7b7g0/OVa7P7DtYc1V7ngaM91p6wZPRRbmNJNX3FHhsU1urh5q1pYxxHdY939LXH1AWrpbNosBysY0GwLWgFruIsn6VAlokCTv4Kn26vM8Y13tyO7Sf4w35lQa+DxB1DWjrmP2W7qxoNUQwObVTKWRzg7MP7yXHn9kH4ONy6I/YbHTIuoNbYcaBW+1U+uXP6+FhV1YgSFu9p7JIbMLD7SolpVs3rLc4jUathysnm1FAD9UYqLVgnPqSFAqJ1z7Kz2Ni2seCQ2OY9UFLmTjKluhV52rbRcWVKLQxzszXtbZpcPde1v7ZEyLCRIF1nigm/qSgouZBAs70SCCBVP89U2PeQQQLboElqCCAijQQQIVlsL/vMRoKL6TPcdid/2/8AT/6uUfCe5U/q+jkEFy16M9J+A90fnBTfuPoggoorD/7f7lYftHT7IIJlFVTlZcPBBBWilSBr4JupoggrM6qdqe75rmvaP3iggrY9o3/iy/FBBBbOYCn8Pr5IIIHMdo3xUVyCCBKCCCD/2Q==" />
                    <ChannelDetails>
                        <ChannelName>mamouth Tube</ChannelName>
                        <ChannelCounter>210k subscribers</ChannelCounter>
                        <Description>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                            At vero eos et accusam et justo duo dolores et ea rebum. 
                            Stet clita kasd gubergren, no sea takimata sanctus 
                            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit</Description>
                    </ChannelDetails>
                </ChannelInfo>

                <Subscribe>SUBSCRIBE</Subscribe>
            </Channel>
            <Hr />

            <Comments />

        </Content>


        <Recommendation>
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
            <Card type="sm" />
        </Recommendation>
    </Container>
  )
}

export default Video

const Container = styled.div`
    display: flex;
    gap: 24px;
`;

const Content = styled.div`
    flex: 5;
    
`;

const VideoWrapper = styled.div`
        
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme}) =>theme.text};
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Info = styled.span`
    color: ${({theme}) =>theme.textSoft}
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme}) =>theme.text}
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.text}
`;

const ChannelName = styled.span`
    font-weight: 500 ;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px ;
    color: ${({theme}) =>theme.textSoft}
    font-size: 12px;
`;

const Description = styled.div`
    font-size: 14px;
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border-radius: 3px;
    height: max-content ;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
`;

const Recommendation = styled.div`
    flex: 2;
`;