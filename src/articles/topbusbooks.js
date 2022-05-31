import React, { useEffect } from "react";
import {
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
} from "@material-ui/core";
import Nav from "../components/Nav";

function TopBusBooks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <Card className="card__single">
        <CardActionArea>
          <CardMedia
            className="media__single"
            component="img"
            image="https://www.middlemarketcenter.org/Media/Expert%20Perspectives%20Images/oldbooksonawoodenshelfno_132025.jpg"
            title="Books"
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              My Top 8 Business Books
            </Typography>
            <Typography className="body__text" variant="h5" color="secondary">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                consectetur, minima ipsam quam quis perspiciatis voluptates,
                iste consequuntur, sed deleniti eum in dolore nostrum eaque
                repellat hic culpa autem voluptatem ducimus eos aliquid
                repudiandae ipsa eligendi? Veritatis, eaque quidem asperiores
                explicabo suscipit iusto ab laboriosam, odio quam illo,
                recusandae omnis et temporibus tempora totam odit dignissimos id
                eius labore. Nulla ea quo numquam quas dolorum repellendus,
                suscipit dolores. <br />
                <br />
                Quod libero praesentium fuga delectus maiores error aliquid
                expedita cum dolore, consequuntur beatae doloremque consectetur
                repellendus perferendis, excepturi optio aspernatur. Quae dolore
                magnam aperiam exercitationem, accusamus libero repellat nostrum
                cum officia ea dolorem a repudiandae deleniti praesentium,
                aspernatur, iure modi id recusandae nemo! Ipsa natus nihil fuga
                corrupti, officia impedit laborum voluptatem esse ut sed
                eligendi id blanditiis adipisci quae eius necessitatibus magnam
                vel excepturi. Officia nesciunt, minus velit reprehenderit
                deserunt ipsum, itaque obcaecati, temporibus commodi vitae harum
                porro! Reprehenderit corporis sapiente totam sunt est qui
                quaerat unde quibusdam recusandae aperiam in quos aliquid natus
                consequatur hic, itaque earum veniam reiciendis perspiciatis
                dolorem beatae quas eos? <br />
                <br />
                Sed facere id ad deserunt in placeat dolor aliquid nulla at
                laborum tempora voluptas repudiandae velit architecto, vero qui
                corrupti, maiores ipsa possimus nam neque accusantium! Suscipit
                ex, delectus necessitatibus nihil quisquam hic aut fugiat
                corporis quibusdam soluta debitis molestiae architecto qui optio
                expedita magnam labore officia provident iste non alias quasi
                incidunt commodi nam. Vero animi doloremque quam repudiandae
                aliquid vitae eaque modi aliquam molestiae. Expedita illum a
                molestias praesentium laboriosam sint omnis commodi ut. <br />
                <br /> Ex magni quidem saepe amet voluptatem ea accusamus odio
                molestias sint ab tenetur necessitatibus consectetur nostrum
                eius eos sequi voluptas, consequuntur exercitationem explicabo
                a! Deleniti fugiat fugit est magnam eveniet beatae, quaerat nam
                laborum ducimus ipsa alias, aperiam enim nobis ut consequatur
                eum inventore quasi, ab voluptatum neque repudiandae provident
                facilis aut quidem. Tempore rerum esse cum non doloremque sequi
                minima ipsam dolorum aliquid! Ab vel incidunt quibusdam quod
                saepe facere natus perspiciatis unde odio veritatis, suscipit,
                harum asperiores id eum obcaecati quo commodi quos cum ad
                repellat nulla beatae minus iusto. Voluptatibus sapiente
                corrupti perspiciatis asperiores excepturi labore unde? Eum,
                nihil aspernatur optio in consequatur alias necessitatibus
                inventore tempore mollitia. A nobis vel veritatis possimus alias
                odit nesciunt, accusantium pariatur! Molestiae quos cupiditate
                animi nulla vel aspernatur enim nostrum optio minus quis,
                quaerat hic, deserunt nemo adipisci. Explicabo perspiciatis eius
                numquam dolores vitae doloribus, amet nulla recusandae corrupti
                velit vel totam nam debitis quod tempore architecto! Vel
                laboriosam dolorem excepturi, explicabo totam impedit minima
                quis sint id, corrupti animi reprehenderit rem? Iusto, modi
                reiciendis enim consequatur magnam maiores fugit magni esse
                illum ipsa quas tenetur beatae inventore? <br />
                <br />
                Asperiores, voluptatibus tempora illum nostrum unde animi hic,
                rerum atque necessitatibus, incidunt suscipit amet minima ut ad
                ipsum libero sit! Culpa debitis repellat quaerat, sequi
                provident, eos alias in labore totam molestiae sed voluptates
                pariatur minus laborum dolorem asperiores atque illo autem quod
                modi natus, praesentium doloribus quibusdam nesciunt. Qui
                eligendi, assumenda iure consequuntur earum inventore numquam
                aliquam suscipit sapiente ad nobis.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card__actions">
          <Box className="author">
            <Avatar src="https://randomuser.me/api/portraits/women/17.jpg" />
            <Box className="author__text">
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                <p>Susan White.</p>
              </Typography>
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                Mar 12, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default TopBusBooks;
