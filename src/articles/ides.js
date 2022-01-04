import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  Card,
  CardActions,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

function Loops() {
  return (
    <div>
      <AppBar className="appBar" color="transparent">
        <Toolbar>
          <Link to="/" rel="stylesheet" href="">
            <Typography color="primary">CONCEPTS</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Card className="card__single">
        <CardActionArea>
          <CardMedia
            className="media__single"
            component="img"
            image="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            title=""
          />
          <CardContent className="content__single">
            <Typography
              className="title title--article"
              variant="h3"
              color="primary"
            >
              IDE's
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
            <Avatar src="https://randomuser.me/api/portraits/men/86.jpg" />
            <Box className="author__text">
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                <p>Troy Young.</p>
              </Typography>
              <Typography
                className="body__text"
                variant="subtitle2"
                color="secondary"
              >
                Mar 19, 2021
              </Typography>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default Loops;
